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
      { label: "Marge's Diner — Ottertail", to: '/ottertail/diner' },
    ],
  },
  { label: "The Marge's Story", to: '/the-marges-story' },
  { label: 'The Shakers', to: '/the-shakers' },
  { label: 'Photos', to: '/photos' },
  { label: 'Find Your Marge’s', to: '/find-your-marges' },
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
    hours: 'Open 7 days a week — 8am–2pm',
    personality:
      'Comfortable neighborhood diner. Breakfast and lunch. Downtown Fargo. Lots of personality without trying too hard.',
    color: 'rust',
  },
  bar: {
    slug: 'bar',
    region: 'fargo',
    name: "Marge's Bar",
    place: 'Downtown Fargo',
    path: '/fargo/bar',
    tag: 'Drinks + Patio',
    heroImage: images.barBasement,
    address: 'Roberts Alley, Downtown Fargo',
    hours: 'Evenings — hours vary',
    personality: 'Intimate, casual neighborhood-bar personality. The original small basement bar where Marge’s began.',
    color: 'forest',
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
    hours: 'Dinner nightly — hours vary',
    personality: 'Classic Midwestern supper club inspiration. Nostalgic but not themed or kitschy. Warm, experiential dining.',
    color: 'forest',
  },
  luckyLounge: {
    slug: 'lucky-lounge',
    region: 'fargo',
    name: 'Lucky Lounge',
    place: 'Inside Marge’s Supper Club',
    path: '/fargo/supper-club/lucky-lounge',
    tag: 'E-Tabs + Blackjack (Coming Soon)',
    heroImage: images.loungeCards,
    address: 'Roberts Alley, Downtown Fargo',
    hours: 'Later — hours vary',
    personality: 'Visually darker and moodier than the main Supper Club. Playing-card and stained-glass visual elements.',
    color: 'ink',
  },
  dinerOttertail: {
    slug: 'diner-ottertail',
    region: 'ottertail',
    name: "Marge's Diner",
    place: 'Ottertail, Minnesota',
    path: '/ottertail/diner',
    tag: 'Breakfast + Lunch + Lake Days',
    heroImage: images.lakeBreakfast,
    address: 'Ottertail, MN',
    hours: 'Breakfast & lunch daily — hours vary by season',
    personality: 'Same Marge’s DNA as Fargo. Stronger Minnesota lake-country personality. Vacation / cabin / summer / lake-day atmosphere.',
    color: 'gold',
  },
};

export const conceptList = Object.values(concepts);

export const footerColumns = [
  {
    title: 'Fargo',
    links: [
      { label: "Marge's Diner", sub: 'Breakfast + Lunch', to: '/fargo/diner' },
      { label: "Marge's Bar", sub: 'Drinks + Patio', to: '/fargo/bar' },
      { label: "Marge's Supper Club", sub: 'Dinner + Cocktails', to: '/fargo/supper-club' },
      { label: 'Lucky Lounge', sub: "Inside Marge's Supper Club", to: '/fargo/supper-club/lucky-lounge' },
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
      { label: 'The Shakers', to: '/the-shakers' },
      { label: 'Photos', to: '/photos' },
      { label: "Find Your Marge's", to: '/find-your-marges' },
    ],
  },
];

export const CLOSING_LINE = 'Come hungry. Leave happy. Stay for one more.';
