/**
 * Marge's Reindeer Room — holiday pop-up bar (year two, 2026).
 *
 * Everything the Reindeer Room page shows lives here: the open nights,
 * hours, address, parking, and the menu. Edit this file to change any of it.
 */

export const REINDEER_YEAR = 2026;
export const REINDEER_HOURS = '4pm – 9pm';
export const REINDEER_OPEN = '16:00';
export const REINDEER_CLOSE = '21:00';

/** Every night the Reindeer Room is open (YYYY-MM-DD, Fargo time). */
export const OPEN_NIGHTS = [
  '2026-11-27', '2026-11-28',
  '2026-12-03', '2026-12-04', '2026-12-05',
  '2026-12-10', '2026-12-11', '2026-12-12',
  '2026-12-17', '2026-12-18', '2026-12-19',
  '2026-12-23', // one final night
];
export const FINAL_NIGHT = '2026-12-23';

export const location = {
  address: '212 Broadway',
  city: 'Fargo, ND',
  note: 'In the old Teddy’s location',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=212+Broadway+Fargo+ND',
};

export const parking = {
  name: 'Roberts Commons Parking Garage',
  note: 'Free after 5pm and on weekends',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Roberts+Commons+Parking+Garage+Fargo+ND',
};

/**
 * The menu. While `sections` is empty the page shows a "menu coming soon"
 * note. To publish it, fill in sections like:
 *
 *   { title: 'Holiday Cocktails', items: [
 *       { name: 'Rudolph’s Mule', description: 'Cranberry, lime, ginger beer', price: '10' },
 *   ] },
 */
export const menu = {
  sections: [],
};

/* ---- Date helpers (all in America/Chicago) ---- */

function fargoNow() {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Chicago',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  return { date: `${get('year')}-${get('month')}-${get('day')}`, time: `${get('hour')}:${get('minute')}` };
}

/** "2026-11-27" -> "Fri, Nov 27" (or long form: "Friday, November 27") */
export function formatNight(iso, long = false) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    weekday: long ? 'long' : 'short',
    month: long ? 'long' : 'short',
    day: 'numeric',
  });
}

/**
 * Where things stand right now:
 *  { state: 'open' }                      — open right now
 *  { state: 'tonight' }                   — open later today
 *  { state: 'upcoming', next: '2026-…' }  — next open night
 *  { state: 'over' }                      — season's done
 */
export function reindeerStatus() {
  const { date, time } = fargoNow();
  if (OPEN_NIGHTS.includes(date)) {
    if (time < REINDEER_OPEN) return { state: 'tonight', next: date };
    if (time < REINDEER_CLOSE) return { state: 'open', next: date };
  }
  const next = OPEN_NIGHTS.find((n) => n > date);
  return next ? { state: 'upcoming', next } : { state: 'over' };
}

/** True from now until the season's over — used to show/hide promos. */
export function reindeerSeasonActive() {
  return reindeerStatus().state !== 'over';
}

/** Calendar weeks (Sun–Sat) covering the season, for the dates grid. */
export function seasonWeeks() {
  const first = OPEN_NIGHTS[0];
  const last = OPEN_NIGHTS[OPEN_NIGHTS.length - 1];
  const toDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const toIso = (dt) => dt.toISOString().slice(0, 10);
  const start = toDate(first);
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = toDate(last);
  end.setUTCDate(end.getUTCDate() + (6 - end.getUTCDay()));
  const weeks = [];
  for (let d = new Date(start); d <= end; ) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(toIso(d));
      d.setUTCDate(d.getUTCDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}
