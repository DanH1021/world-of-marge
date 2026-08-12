import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { menuSources } from '../data/menuSources';

// One Firebase app instance per menu source, cached so repeated fetches
// (e.g. re-navigating to the page) don't re-initialize the SDK.
const appCache = {};

function getSourceApp(sourceKey) {
  const source = menuSources[sourceKey];
  if (!source) throw new Error(`Unknown menu source: "${sourceKey}"`);
  if (!appCache[sourceKey]) {
    const existing = getApps().find((a) => a.name === sourceKey);
    appCache[sourceKey] = existing || initializeApp(source.firebaseConfig, sourceKey);
  }
  return appCache[sourceKey];
}

/**
 * Reads the live menu for a given location from its Menu Builder Firestore
 * project. Read-only — this site never writes menu data. Signs in
 * anonymously first since Firestore rules currently require auth for any
 * read (kitchen staff sign in the same way, behind the Menu Builder's
 * password gate); this keeps the live kitchen tool's security rules
 * untouched while still letting the public site read published items.
 *
 * Only items with active === true are returned. Categories are ordered per
 * menuSources[sourceKey].categoryOrder; any category not in that list is
 * appended alphabetically at the end so new categories never silently
 * disappear if kitchen staff add one before this list is updated.
 */
export async function fetchMenu(sourceKey) {
  const source = menuSources[sourceKey];
  if (!source) throw new Error(`Unknown menu source: "${sourceKey}"`);

  const app = getSourceApp(sourceKey);
  const auth = getAuth(app);
  if (!auth.currentUser) {
    await signInAnonymously(auth);
  }

  const db = getFirestore(app);

  const itemsQuery = query(collection(db, 'menuItems'), where('active', '==', true));
  const [itemsSnap, notesSnap] = await Promise.all([
    getDocs(itemsQuery),
    getDoc(doc(db, 'meta', 'categoryNotes')),
  ]);

  const items = itemsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
  const notes = notesSnap.exists() ? notesSnap.data() : {};

  const byCategory = new Map();
  for (const item of items) {
    const cat = item.category || 'Other';
    if (!byCategory.has(cat)) byCategory.set(cat, []);
    byCategory.get(cat).push(item);
  }

  const order = source.categoryOrder || [];
  const orderedNames = [
    ...order.filter((c) => byCategory.has(c)),
    ...[...byCategory.keys()].filter((c) => !order.includes(c)).sort(),
  ];

  return orderedNames.map((name) => ({
    name,
    note: notes[name] || '',
    items: byCategory
      .get(name)
      .slice()
      .sort((a, b) => (a.sortIndex ?? 0) - (b.sortIndex ?? 0)),
  }));
}
