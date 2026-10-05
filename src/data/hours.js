/**
 * Weekly hours for each concept — the single source of truth for every
 * place hours appear on the site (concept cards, Visit panels, and the
 * Hours at a Glance table on Eat & Drink).
 *
 * To change hours, edit the times below. A day that's missing is shown as
 * "Closed". Use `null` for a concept whose hours aren't set yet.
 */

export const WEEK = [
  { key: 'mon', short: 'Mon', long: 'Monday' },
  { key: 'tue', short: 'Tue', long: 'Tuesday' },
  { key: 'wed', short: 'Wed', long: 'Wednesday' },
  { key: 'thu', short: 'Thu', long: 'Thursday' },
  { key: 'fri', short: 'Fri', long: 'Friday' },
  { key: 'sat', short: 'Sat', long: 'Saturday' },
  { key: 'sun', short: 'Sun', long: 'Sunday' },
];

const DINER = '8am – 2pm';

export const hours = {
  dinerFargo: {
    mon: DINER, tue: DINER, wed: DINER, thu: DINER, fri: DINER, sat: DINER, sun: DINER,
  },
  bar: {
    tue: '6pm – midnight',
    wed: '6pm – midnight',
    thu: '6pm – midnight',
    fri: '6pm – 2am',
    sat: '6pm – 2am',
  },
  supperClub: {
    thu: '4pm – 11pm',
    fri: '4pm – 11pm',
    sat: '4pm – 11pm',
  },
  luckyLounge: null,
  dinerOttertail: {
    thu: DINER, fri: DINER, sat: DINER, sun: DINER,
  },
};

/** Note shown in place of a schedule when a concept's hours are null. */
export const hoursNote = {
  luckyLounge: 'Hours vary',
};

/**
 * Collapse a week into readable lines, grouping consecutive days that share
 * the same time: [{ days: 'Tue – Thu', time: '6pm – midnight' }, ...].
 * A full week becomes 'Every day'.
 */
export function groupHours(schedule) {
  if (!schedule) return [];
  const groups = [];
  WEEK.forEach((day, i) => {
    const time = schedule[day.key];
    if (!time) return;
    const last = groups[groups.length - 1];
    if (last && last.time === time && last.endIndex === i - 1) {
      last.endIndex = i;
    } else {
      groups.push({ time, startIndex: i, endIndex: i });
    }
  });
  return groups.map(({ time, startIndex, endIndex }) => {
    let days;
    if (startIndex === 0 && endIndex === 6) days = 'Every day';
    else if (startIndex === endIndex) days = WEEK[startIndex].short;
    else if (endIndex - startIndex === 1) days = `${WEEK[startIndex].short} & ${WEEK[endIndex].short}`;
    else days = `${WEEK[startIndex].short} – ${WEEK[endIndex].short}`;
    return { days, time };
  });
}

/** Today's day key ('mon'…'sun') in Fargo / Ottertail local time. */
export function todayKey() {
  try {
    const short = new Date().toLocaleDateString('en-US', { weekday: 'short', timeZone: 'America/Chicago' });
    return short.slice(0, 3).toLowerCase();
  } catch {
    return WEEK[(new Date().getDay() + 6) % 7].key;
  }
}
