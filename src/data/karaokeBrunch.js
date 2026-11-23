/**
 * Marge's Christmas Karaoke Brunch — ticketed event.
 *
 * Tickets are sold and paid for entirely in the Reindeer Room POS. This site
 * only links to the POS ticket page and reads its public availability feed.
 * Price and tickets remaining are never hardcoded here; they always come from
 * the feed. No keys or secrets are needed.
 */

export const EVENT_SLUG = 'karaoke-brunch';
export const TICKETS_API = `https://reindeer.worldofmarge.com/api/tickets?event=${EVENT_SLUG}`;
export const FALLBACK_BUY_URL = `https://reindeer.worldofmarge.com/tickets/${EVENT_SLUG}`;

/** Shown only until (or if) the feed loads. */
export const FALLBACK = {
  name: 'Christmas Karaoke Brunch',
  dateLabel: 'Sunday, December 20',
  description:
    'Brunch, Christmas classics and a microphone with your name on it. Grab your people and sing one for Marge.',
};

/** Event day in Fargo time — promos hide themselves after this date. */
export const EVENT_DATE = '2026-12-20';

/** Under this many tickets, the count gets the "Only N left!" treatment. */
export const LOW_STOCK = 10;

/** Event pages / promos only show through the event day (Fargo time). */
export function karaokeBrunchUpcoming() {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date());
  return today <= EVENT_DATE;
}

const isNum = (v) => typeof v === 'number' && Number.isFinite(v);
const isStr = (v) => typeof v === 'string' && v.trim() !== '';

function safeBuyUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' ? u.href : null;
  } catch {
    return null;
  }
}

/** Turn the feed's JSON into what the page needs, tolerating missing fields. */
export function parseTicketFeed(json) {
  if (!json || typeof json !== 'object') throw new Error('Bad ticket feed');

  let status = json.status;
  if (!['coming_soon', 'on_sale', 'sold_out'].includes(status)) {
    if (json.sold_out === true) status = 'sold_out';
    else if (json.on_sale === true) status = 'on_sale';
    else if (json.on_sale === false) status = 'coming_soon';
    else status = null;
  }

  let priceDisplay = isStr(json.price_display) ? json.price_display : null;
  if (!priceDisplay && isNum(json.price)) {
    priceDisplay = (json.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  let dateLabel = null;
  let timeLabel = null;
  const start = isStr(json.starts_at) ? new Date(json.starts_at) : null;
  if (start && !Number.isNaN(start.getTime())) {
    dateLabel = start.toLocaleDateString('en-US', {
      timeZone: 'America/Chicago', weekday: 'long', month: 'long', day: 'numeric',
    });
    timeLabel = start
      .toLocaleTimeString('en-US', { timeZone: 'America/Chicago', hour: 'numeric', minute: '2-digit' })
      .replace(':00', '')
      .replace(' AM', 'am')
      .replace(' PM', 'pm');
  }

  return {
    name: isStr(json.name) ? json.name : null,
    description: isStr(json.description) ? json.description : null,
    location: isStr(json.location) ? json.location : null,
    dateLabel,
    timeLabel,
    startsAt: start && !Number.isNaN(start.getTime()) ? start.toISOString() : null,
    priceDisplay,
    remaining: isNum(json.remaining) ? Math.max(0, Math.floor(json.remaining)) : null,
    maxPerOrder: isNum(json.max_per_order) && json.max_per_order > 0 ? Math.floor(json.max_per_order) : null,
    status,
    buyUrl: safeBuyUrl(json.buy_url),
  };
}
