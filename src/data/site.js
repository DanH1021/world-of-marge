import { images } from './placeholderImages';

export const nav = [
  { label: 'The World', to: '/' },
  {
    label: 'Eat & Drink',
    to: '/eat-and-drink',
    children: [
      { label: "Marge's Diner — Fargo", to: '/fargo/diner' },
      { label: "Marge's Bar", to: '/fargo/bar' },
      { label: "Marge's Supper Club", to: '/fargo/supper-club' },
      { label: 'Lucky Lounge', to: '/fargo/supper-club/lucky-lounge' },
      { label: "Marge's Reindeer Room", to: '/fargo/reindeer-room' },
      { label: "Marge's Diner — Ottertail", to: '/ottertail/diner' },
    ],
  },
  { label: "The Marge's Story", to: '/the-marges-story' },
  { label: 'Photos', to: '/photos' },
  { label: 'Find Your Marge’s', to: '/find-your-marges' },
  { label: 'Bar Catering', to: '/catering' },
  // Seasonal — only shown while the Reindeer Room season is on (see Header.jsx)
  { label: 'Reindeer Room', to: '/fargo/reindeer-room', seasonal: 'reindeerRoom' },
];

export const concepts = {
  dinerFargo: {
    slug: 'diner-fargo',
    region: 'fargo',
    name: "Marge's Diner",
    place: 'Downtown Fargo',
    path: '/fargo/diner',
    tag: 'Breakfast + Lunch',
    heroImage: images.dinerPancakes,
    address: '220 N Broadway Dr, Fargo, ND',
    personality:
      'Comfortable neighborhood diner. Breakfast and lunch. Downtown Fargo. Lots of personality without trying too hard.',
    color: 'rust',
    social: { instagram: 'marges_diner', facebook: 'marges_diner' },
  },
  bar: {
    slug: 'bar',
    region: 'fargo',
    name: "Marge's Bar",
    place: 'Downtown Fargo',
    path: '/fargo/bar',
    tag: 'Drinks + Patio',
    heroImage: images.barHero,
    address: 'Roberts Alley, Downtown Fargo',
    personality: 'Intimate, casual neighborhood-bar personality. The original small basement bar where Marge’s began.',
    color: 'forest',
    social: { instagram: 'margesbarfargo', facebookUrl: 'https://www.facebook.com/profile.php?id=100063509833472' },
  },
  supperClub: {
    slug: 'supper-club',
    region: 'fargo',
    name: "Marge's Supper Club",
    place: 'Roberts Alley, Downtown Fargo',
    path: '/fargo/supper-club',
    tag: 'Dinner + Cocktails',
    heroImage: images.supperDinnerTable,
    address: 'Roberts Alley, Downtown Fargo',
    personality: 'Classic Midwestern supper club inspiration. Nostalgic but not themed or kitschy. Warm, experiential dining.',
    color: 'forest',
    social: { instagram: null, facebook: 'margessupperclub' },
  },
  luckyLounge: {
    slug: 'lucky-lounge',
    region: 'fargo',
    name: 'Lucky Lounge',
    place: 'Inside Marge’s Supper Club',
    path: '/fargo/supper-club/lucky-lounge',
    tag: 'E-Tabs + Blackjack (Coming Soon)',
    heroImage: images.loungePattern,
    address: 'Roberts Alley, Downtown Fargo',
    personality: 'Visually darker and moodier than the main Supper Club. Playing-card and stained-glass visual elements.',
    color: 'ink',
  },
  reindeerRoom: {
    slug: 'reindeer-room',
    region: 'fargo',
    name: "Marge's Reindeer Room",
    place: '212 Broadway, Downtown Fargo',
    path: '/fargo/reindeer-room',
    tag: 'Holiday Pop-Up Bar',
    heroImage: '/photos/reindeer-room-card.jpg',
    address: '212 Broadway, Fargo, ND',
    personality: 'One-month holiday pop-up bar, back for year two in the old Teddy’s space.',
    color: 'forest',
  },
  dinerOttertail: {
    slug: 'diner-ottertail',
    region: 'ottertail',
    name: "Marge's Diner",
    place: 'Ottertail, Minnesota',
    path: '/ottertail/diner',
    tag: 'Breakfast + Lunch + Lake Days',
    heroImage: images.dinerHashbrownsCrochet,
    address: 'Ottertail, MN',
    personality: 'Same Marge’s DNA as Fargo. Stronger Minnesota lake-country personality. Vacation / cabin / summer / lake-day atmosphere.',
    color: 'gold',
    social: { instagram: null, facebook: 'ottertailmarge' },
  },
};

// Each concept knows its own key (used to look up hours in ./hours.js).
Object.entries(concepts).forEach(([key, concept]) => { concept.key = key; });

export const conceptList = Object.values(concepts);

export const footerColumns = [
  {
    title: 'Fargo',
    links: [
      { label: "Marge's Diner", sub: 'Breakfast + Lunch', to: '/fargo/diner' },
      { label: "Marge's Bar", sub: 'Drinks + Patio', to: '/fargo/bar' },
      { label: "Marge's Supper Club", sub: 'Dinner + Cocktails', to: '/fargo/supper-club' },
      { label: 'Lucky Lounge', sub: "Inside Marge's Supper Club", to: '/fargo/supper-club/lucky-lounge' },
      { label: "Marge's Reindeer Room", sub: 'Holiday Pop-Up · Nov 27 – Dec 23', to: '/fargo/reindeer-room' },
    ],
  },
  {
    title: 'Ottertail',
    links: [
      { label: "Marge's Diner", sub: 'Breakfast + Lunch + Lake Days', to: '/ottertail/diner' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: "The Marge's Story", to: '/the-marges-story' },
      { label: 'Photos', to: '/photos' },
      { label: "Find Your Marge's", to: '/find-your-marges' },
      { label: 'Bar Catering', to: '/catering' },
      { label: 'Reservations', to: '/reservations' },
      { label: 'Manage My Reservation', to: '/reservations/manage' },
    ],
  },
];

export const CLOSING_LINE = 'Come hungry. Leave happy. Stay for one more.';
