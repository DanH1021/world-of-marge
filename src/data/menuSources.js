// ==========================================================================
// LIVE MENU SOURCES
// Each Marge's concept that has its own Menu Builder (Firebase project) gets
// an entry here. Kitchen staff edit the menu in the Menu Builder tool; this
// site only ever *reads* it. Adding a second location's menu builder later
// (per the brief: "eventually I might want to build the same menu tool for
// the other locations") is just adding another entry to this object — no
// page code needs to change.
//
// Firebase web config values are not secret by design (per the project
// brief) — access is controlled entirely by Firestore security rules, not
// by hiding these values. Safe to ship in client-side source.
// ==========================================================================

export const CATEGORY_ORDER = [
  'Welcome Snack',
  'Specials',
  'Bar Snacks',
  'Apps/Starter Plates',
  'Entrees',
  'Desserts',
  'Sides',
];

export const menuSources = {
  'supper-club': {
    label: "Marge's Supper Club & Lucky Lounge",
    firebaseConfig: {
      apiKey: 'AIzaSyCHHeVeds3X8S632ZnfztVzlx_I123gOUA',
      authDomain: 'marges-menu.firebaseapp.com',
      projectId: 'marges-menu',
      storageBucket: 'marges-menu.firebasestorage.app',
      messagingSenderId: '400558201903',
      appId: '1:400558201903:web:2c15f3ba963764f467fada',
    },
    categoryOrder: CATEGORY_ORDER,
  },
  // Future locations: add another key here once that location has its own
  // Menu Builder / Firestore project, e.g.:
  // 'diner-fargo': { label: "Marge's Diner — Fargo", firebaseConfig: {...}, categoryOrder: [...] },
};
