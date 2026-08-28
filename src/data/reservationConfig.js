// ==========================================================================
// RESERVATIONS — shared config
// Must match the Team Portal's copy of this same config exactly (per the
// integration spec) — table ids, capacities, and time slots are hardcoded
// on both sides and cross-checked by the Firestore security rules.
// ==========================================================================

export const TABLES = [
  { id: 'boothA', label: '201', capacity: 6, times: ['16:00', '17:30', '19:00', '20:30'] },
  { id: 'boothB', label: '203', capacity: 6, times: ['16:15', '17:45', '19:15', '20:45'] },
  { id: 'boothC', label: '301', capacity: 6, times: ['16:30', '18:00', '19:30', '21:00'] },
  { id: 'boothD', label: '401', capacity: 6, times: ['16:45', '18:15', '19:45', '21:15'] },
  { id: 'largeTable', label: '202', capacity: 10, times: ['16:00', '17:30', '19:00', '20:30'] },
];

// Every distinct time value across all 5 tables, in order — 16 total.
export const ALL_TIMES = [...new Set(TABLES.flatMap((t) => t.times))].sort();

export const RESERVATION_LENGTH_MINUTES = 90;
export const MAX_PARTY_SIZE = Math.max(...TABLES.map((t) => t.capacity));
export const MAX_ADVANCE_DAYS = 30;
export const SAME_DAY_CUTOFF_HOUR = 15; // 3:00 PM local time

// Reservations only run Thursday (4), Friday (5), Saturday (6).
const BOOKABLE_WEEKDAYS = [4, 5, 6];

/** "19:30" -> "7:30 PM" */
export function formatTime12h(time) {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

/** Date -> "YYYY-MM-DD" using LOCAL date parts (never UTC — avoids off-by-one-day bugs). */
export function toDateKey(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** "YYYY-MM-DD" -> weekday (0=Sun..6=Sat), computed from local date parts, not Date-string parsing. */
export function dateKeyWeekday(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, m - 1, d).getDay();
}

/** "YYYY-MM-DD" -> a friendly label, e.g. "Friday, August 21". */
export function formatDateLabel(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Bookable dates for the online widget: Thu/Fri/Sat only, today through
 * MAX_ADVANCE_DAYS out. Today is included only if it's a bookable weekday
 * AND it's before the same-day cutoff — past the cutoff, that whole day's
 * slots stop being bookable online (staff can still add one from the
 * portal), so we simply don't offer today as a choice anymore.
 */
export function getBookableDates(now = new Date()) {
  const dates = [];
  const cutoffPassed = now.getHours() >= SAME_DAY_CUTOFF_HOUR;
  for (let i = 0; i <= MAX_ADVANCE_DAYS; i++) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
    if (!BOOKABLE_WEEKDAYS.includes(d.getDay())) continue;
    if (i === 0 && cutoffPassed) continue;
    dates.push(toDateKey(d));
  }
  return dates;
}

/**
 * Given a party size and the set of already-occupied "tableId_time" keys
 * for one date, returns the bookable times with their auto-assigned table.
 * Mirrors the spec's section 3 logic exactly, including the smallest-
 * capacity tiebreak so the 10-top stays open for parties that need it.
 */
export function computeAvailableTimes(partySize, occupiedKeys) {
  if (partySize > MAX_PARTY_SIZE) return [];

  const results = [];
  for (const time of ALL_TIMES) {
    const candidates = TABLES.filter(
      (t) => t.times.includes(time) && t.capacity >= partySize && !occupiedKeys.has(`${t.id}_${time}`)
    );
    if (!candidates.length) continue;
    candidates.sort((a, b) => a.capacity - b.capacity);
    results.push({ time, tableId: candidates[0].id });
  }
  return results;
}

/** Confirmation numbers: 6 chars, no 0/O/1/I/L — must match the portal's generator exactly. */
export function generateConfirmationNumber() {
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += alphabet[Math.floor(Math.random() * alphabet.length)];
  return code;
}

/** Must match the portal's lookup-key logic exactly — last name (lowercased, letters only) + last 4 phone digits. */
export function computeLookupKey(name, phone) {
  const parts = (name || '').trim().split(/\s+/);
  const lastName = (parts[parts.length - 1] || '').toLowerCase().replace(/[^a-z]/g, '');
  const digits = (phone || '').replace(/\D/g, '');
  return `${lastName}_${digits.slice(-4)}`;
}
