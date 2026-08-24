import { concepts } from './site';

export const whereOptions = [
  { key: 'fargo', label: 'Fargo' },
  { key: 'ottertail', label: 'Ottertail' },
];

export const planOptions = [
  { key: 'breakfast', label: 'Breakfast' },
  { key: 'date-night', label: 'Date Night' },
  { key: 'family', label: 'Family' },
  { key: 'drinks', label: 'Drinks' },
  { key: 'celebrating', label: 'Celebrating' },
  { key: 'lake-day', label: 'Lake Day' },
  { key: 'no-plan', label: 'No Plan Whatsoever' },
];

const fargoPlans = {
  breakfast: [
    { time: '9:00 AM', activity: "Breakfast at Marge's Diner.", to: concepts.dinerFargo.path },
    { time: '10:15 AM', activity: 'A second cup of coffee, because you earned it.', to: concepts.dinerFargo.path },
    { time: '1:00 PM', activity: 'Back to work. Or not. We don’t know your life.', to: null },
  ],
  'date-night': [
    { time: '6:00 PM', activity: "A drink at Marge's Bar, where it all began. (Tue–Sat)", to: concepts.bar.path },
    { time: '7:00 PM', activity: 'Dinner at Marge’s Supper Club. (Thu–Sat)', to: concepts.supperClub.path },
    { time: '9:00 PM', activity: 'One more, in the Lucky Lounge. (Thu–Sat)', to: concepts.luckyLounge.path },
    { time: '11:17 PM', activity: 'This portion of your itinerary has been intentionally left blank.', to: null },
  ],
  family: [
    { time: '9:30 AM', activity: "Breakfast at Marge's Diner. Get the pancakes.", to: concepts.dinerFargo.path },
    { time: '12:00 PM', activity: 'Back for the salad bar. Yes, again.', to: concepts.dinerFargo.path },
    { time: '2:00 PM', activity: 'Nap. For somebody in your party, at least.', to: null },
  ],
  drinks: [
    { time: '6:00 PM', activity: "Drinks on the patio at Marge's Bar. (Tue–Sat)", to: concepts.bar.path },
    { time: '8:30 PM', activity: 'The Lucky Lounge, if you’re feeling lucky. (Thu–Sat)', to: concepts.luckyLounge.path },
    { time: '11:17 PM', activity: 'This portion of your itinerary has been intentionally left blank.', to: null },
  ],
  celebrating: [
    { time: '6:30 PM', activity: 'Dinner at Marge’s Supper Club. Order the good stuff. (Thu–Sat)', to: concepts.supperClub.path },
    { time: '8:45 PM', activity: 'Celebrate properly in the Lucky Lounge. (Thu–Sat)', to: concepts.luckyLounge.path },
    { time: '11:17 PM', activity: 'This portion of your itinerary has been intentionally left blank.', to: null },
  ],
  'lake-day': [
    { time: 'Now', activity: 'Fargo doesn’t have a lake. Ottertail does — about three hours west.', to: '/ottertail' },
    { time: 'Meanwhile', activity: 'The patio at Marge’s Bar is the closest thing we’ve got downtown. (Evenings, Tue–Sat)', to: concepts.bar.path },
  ],
  'no-plan': [
    { time: '10:30 AM', activity: "Breakfast at Marge's Diner.", to: concepts.dinerFargo.path },
    { time: '6:00 PM', activity: "Drink on the patio at Marge's Bar. (Tue–Sat)", to: concepts.bar.path },
    { time: '7:00 PM', activity: "Dinner at Marge's Supper Club. (Thu–Sat)", to: concepts.supperClub.path },
    { time: '9:00 PM', activity: 'Lucky Lounge. (Thu–Sat)', to: concepts.luckyLounge.path },
    { time: '11:17 PM', activity: 'This portion of your itinerary has been intentionally left blank.', to: null },
  ],
};

const ottertailPlans = {
  breakfast: [
    { time: '8:30 AM', activity: 'Coffee that tastes better because you don’t have anywhere to be.', to: concepts.dinerOttertail.path },
    { time: '9:00 AM', activity: "Breakfast before the boat at Marge's Diner.", to: concepts.dinerOttertail.path },
  ],
  'lake-day': [
    { time: '8:00 AM', activity: 'Breakfast before the boat.', to: concepts.dinerOttertail.path },
    { time: '9:30 AM', activity: 'Lake.', to: null },
    { time: '12:30 PM', activity: 'Lunch after the lake.', to: concepts.dinerOttertail.path },
    { time: '1:30 PM', activity: 'Lake, again.', to: null },
    { time: 'Tomorrow', activity: 'Repeat.', to: null },
  ],
  family: [
    { time: '8:30 AM', activity: 'Breakfast for everyone, before the boat.', to: concepts.dinerOttertail.path },
    { time: 'All day', activity: 'Lake. Repeat as needed.', to: null },
  ],
  'no-plan': [
    { time: '8:30 AM', activity: "Coffee at Marge's Diner. No particular hurry.", to: concepts.dinerOttertail.path },
    { time: 'Sometime after', activity: 'Another Bloody Mary, because you’re on vacation.', to: concepts.dinerOttertail.path },
    { time: 'Later', activity: 'We’ll see you tomorrow.', to: null },
  ],
  'date-night': [
    { time: 'Tonight', activity: 'Ottertail keeps it simple — breakfast, lake, lunch, lake, repeat. For a proper date night, head to The Otter Supper Club, about 1.5 hours west.', to: null },
  ],
  drinks: [
    { time: 'Tonight', activity: 'Grab a Bloody Mary at the diner — Ottertail doesn’t have a bar yet. The Otter Supper Club, about 1.5 hours west, has you covered for a proper night out.', to: null },
  ],
  celebrating: [
    { time: 'Today', activity: 'Celebrate lake-country style: breakfast, lake, repeat. For the full night-out treatment, head to The Otter Supper Club, about 1.5 hours west.', to: null },
  ],
};

export function buildItinerary(where, plan) {
  const source = where === 'ottertail' ? ottertailPlans : fargoPlans;
  return source[plan] || source['no-plan'];
}
