// ==========================================================================
// RESERVATIONS — Firestore client
//
// Talks to the SAME Firebase project the Team Portal uses (`marges-menu`)
// but, per the integration spec, this module must NEVER sign in — not
// anonymously, not any other way. The portal signs in anonymously to get
// full read/write access for staff; if this website did the same, any site
// visitor would inherit that same full database access. Instead, every call
// here runs fully unauthenticated against the narrow public rules carved
// out for the `reservations`, `availability`, and `reservationLookup`
// collections. Do not add an auth import to this file.
//
// Given its own named Firebase app instance (separate from the read-only
// menu app in firestoreMenu.js) so the two stay independent even though
// they point at the same project.
// ==========================================================================

import { initializeApp, getApps } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  writeBatch,
  runTransaction,
} from 'firebase/firestore';
import { TABLES, generateConfirmationNumber, computeLookupKey } from '../data/reservationConfig';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCHHeVeds3X8S632ZnfztVzlx_I123gOUA',
  authDomain: 'marges-menu.firebaseapp.com',
  projectId: 'marges-menu',
  storageBucket: 'marges-menu.firebasestorage.app',
  messagingSenderId: '400558201903',
  appId: '1:400558201903:web:2c15f3ba963764f467fada',
};

const APP_NAME = 'reservations';

function getApp() {
  const existing = getApps().find((a) => a.name === APP_NAME);
  return existing || initializeApp(FIREBASE_CONFIG, APP_NAME);
}

function getDb() {
  return getFirestore(getApp());
}

/**
 * Returns the set of "tableId_time" keys already occupied on this date.
 * A slot is occupied if its `availability` doc exists and its status is
 * anything other than 'cancelled' — the website itself only ever writes
 * 'confirmed' or 'cancelled' to this field, and treating any non-cancelled
 * status as occupied is also the safe reading for whatever the team portal
 * may do internally (e.g. marking a table seated) without us needing to
 * know its exact status vocabulary.
 */
export async function fetchOccupiedKeys(dateKey) {
  const db = getDb();
  const q = query(collection(db, 'availability'), where('date', '==', dateKey));
  const snap = await getDocs(q);
  const occupied = new Set();
  snap.forEach((d) => {
    const data = d.data();
    if (data.status !== 'cancelled') {
      occupied.add(`${data.tableId}_${data.time}`);
    }
  });
  return occupied;
}

/**
 * Books a reservation: writes the `reservations` + `availability` docs in a
 * single atomic batch (required — the security rules cross-check the two
 * with getAfter(), which only sees writes from the same batch/transaction).
 * Then best-effort updates the `reservationLookup` doc so "Manage My
 * Reservation" by name+phone works later; a failure there does not fail
 * the booking itself, since the confirmation number is already valid.
 *
 * Throws if the slot was taken a moment earlier by someone else (the
 * `availability` doc's `create` rule simply won't match if that doc
 * already exists) — callers should catch this, re-fetch availability, and
 * show the guest an updated time list.
 */
export async function bookReservation({ date, time, tableId, partySize, name, phone, email, notes }) {
  const db = getDb();
  const confirmationNumber = generateConfirmationNumber();
  const lookupKey = computeLookupKey(name, phone);

  const batch = writeBatch(db);

  batch.set(doc(db, 'reservations', confirmationNumber), {
    date,
    time,
    tableId,
    partySize,
    name,
    phone,
    email: email || '',
    notes: notes || '',
    status: 'confirmed',
    source: 'online',
    lookupKey,
    createdAt: new Date().toISOString(),
  });

  batch.set(doc(db, 'availability', `${date}_${tableId}_${time}`), {
    date,
    tableId,
    time,
    status: 'confirmed',
    confirmationNumber,
  });

  await batch.commit();

  try {
    await upsertLookup(lookupKey, confirmationNumber);
  } catch (err) {
    // Non-fatal: the reservation itself is booked and retrievable by
    // confirmation number even if this secondary index write failed.
    console.error('Reservation booked, but reservationLookup update failed:', err);
  }

  return confirmationNumber;
}

async function upsertLookup(lookupKey, confirmationNumber) {
  const db = getDb();
  const ref = doc(db, 'reservationLookup', lookupKey);
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) {
      tx.set(ref, { confirmationNumbers: [confirmationNumber] });
    } else {
      const existing = snap.data().confirmationNumbers || [];
      tx.set(ref, { confirmationNumbers: [...existing, confirmationNumber] });
    }
  });
}

/** Looks up a single reservation by its confirmation number. Returns null if not found. */
export async function getReservationByConfirmation(confirmationNumber) {
  const db = getDb();
  const snap = await getDoc(doc(db, 'reservations', confirmationNumber));
  if (!snap.exists()) return null;
  return { confirmationNumber: snap.id, ...snap.data() };
}

/** Looks up every reservation tied to a last name + last-4-of-phone. Returns []  if none found. */
export async function getReservationsByNamePhone(name, phone) {
  const db = getDb();
  const lookupKey = computeLookupKey(name, phone);
  const lookupSnap = await getDoc(doc(db, 'reservationLookup', lookupKey));
  if (!lookupSnap.exists()) return [];

  const numbers = lookupSnap.data().confirmationNumbers || [];
  const results = await Promise.all(numbers.map((num) => getReservationByConfirmation(num)));
  return results.filter(Boolean);
}

/**
 * Cancels a reservation: flips both docs' status to 'cancelled' in one
 * atomic batch, immediately freeing the slot. Returns the reservation as it
 * was before cancelling (useful for a "you cancelled X" confirmation).
 */
export async function cancelReservation(confirmationNumber) {
  const db = getDb();
  const resRef = doc(db, 'reservations', confirmationNumber);
  const resSnap = await getDoc(resRef);
  if (!resSnap.exists()) throw new Error('Reservation not found.');

  const r = resSnap.data();
  if (r.status !== 'confirmed') {
    return { ...r, confirmationNumber, alreadyCancelled: true };
  }

  const batch = writeBatch(db);
  batch.update(resRef, { status: 'cancelled' });
  batch.update(doc(db, 'availability', `${r.date}_${r.tableId}_${r.time}`), { status: 'cancelled' });
  await batch.commit();

  return { ...r, confirmationNumber, status: 'cancelled' };
}

export function tableLabel(tableId) {
  return TABLES.find((t) => t.id === tableId)?.label || tableId;
}
