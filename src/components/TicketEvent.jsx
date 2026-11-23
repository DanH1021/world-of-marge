import { Link } from 'react-router-dom';
import useTicketFeed from '../hooks/useTicketFeed';
import { FALLBACK, FALLBACK_BUY_URL, LOW_STOCK } from '../data/karaokeBrunch';
import Waitlist from './Waitlist';
import './TicketEvent.css';

/** Work out the button + tickets-left line from the feed result. */
function ticketState(feed) {
  const data = feed.state === 'ready' ? feed.data : null;
  const status = data?.status ?? null;

  if (status === 'sold_out') {
    return { enabled: false, soldOut: true, label: 'Sold out', left: 'Sold out — but there’s a waitlist.' };
  }
  if (status === 'coming_soon') {
    return { enabled: false, label: 'Tickets coming soon', left: 'Tickets aren’t on sale yet. Check back soon.' };
  }

  // on_sale, still loading, or the feed failed: always offer the link.
  let left = '';
  if (feed.state === 'loading') left = 'Checking availability…';
  else if (status === 'on_sale' && data.remaining !== null) {
    const n = data.remaining;
    if (n === 1) left = 'Only 1 ticket left!';
    else if (n < LOW_STOCK) left = `Only ${n} tickets left!`;
    else left = `${n} tickets left`;
  }
  return {
    enabled: true,
    label: 'Buy tickets',
    href: data?.buyUrl || FALLBACK_BUY_URL,
    left,
    low: status === 'on_sale' && data.remaining !== null && data.remaining < LOW_STOCK,
  };
}

function BuyButton({ t, className = '' }) {
  if (!t.enabled) {
    // Real <a>, but with no href it isn't a link — announced as unavailable.
    return (
      <a className={`btn ticket-btn is-disabled ${className}`} aria-disabled="true" role="link">
        {t.label}
      </a>
    );
  }
  return (
    <a href={t.href} className={`btn btn-primary ticket-btn ${className}`}>
      {t.label}
    </a>
  );
}

function TicketsLeft({ t }) {
  return (
    <p className={`ticket-left${t.low ? ' is-low' : ''}`} aria-live="polite">
      {t.left}
    </p>
  );
}

/**
 * Christmas Karaoke Brunch event block.
 *  variant="full"    — the event page
 *  variant="compact" — promo card for the homepage / Reindeer Room page
 */
export default function TicketEvent({ variant = 'full', headingLevel = 2 }) {
  const feed = useTicketFeed();
  const data = feed.state === 'ready' ? feed.data : null;
  const t = ticketState(feed);
  const H = `h${headingLevel}`;

  const name = data?.name || FALLBACK.name;
  const date = data?.dateLabel || FALLBACK.dateLabel;
  const when = data?.timeLabel ? `${date} · ${data.timeLabel}` : date;
  const description = data?.description || FALLBACK.description;

  if (variant === 'compact') {
    return (
      <div className="ticket-promo">
        <div className="ticket-promo-copy">
          <p className="eyebrow">Holiday Event &middot; Tickets</p>
          <H className="ticket-promo-title">{name}</H>
          <p className="ticket-promo-when">{when}</p>
          {data?.priceDisplay && (
            <p className="ticket-price-line">
              <strong>{data.priceDisplay}</strong> + tax per ticket
            </p>
          )}
        </div>
        <div className="ticket-promo-actions">
          <BuyButton t={t} />
          <TicketsLeft t={t} />
          {t.soldOut ? (
            <Link to="/karaoke-brunch#waitlist" className="ticket-details-link">Join the waitlist</Link>
          ) : (
            <Link to="/karaoke-brunch" className="ticket-details-link">Event details</Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="ticket-event">
      <div className="ticket-event-info">
        <p className="eyebrow">Holiday Event</p>
        <H className="ticket-event-title">{name}</H>
        <dl className="ticket-event-facts">
          <div>
            <dt>When</dt>
            <dd>{when}</dd>
          </div>
          {data?.location && (
            <div>
              <dt>Where</dt>
              <dd>{data.location}</dd>
            </div>
          )}
        </dl>
        <p className="ticket-event-desc">{description}</p>
      </div>

      <aside className="ticket-card" aria-label="Tickets">
        <p className="ticket-card-label">Tickets</p>
        {data?.priceDisplay ? (
          <p className="ticket-card-price">
            {data.priceDisplay} <span>+ tax</span>
          </p>
        ) : (
          <p className="ticket-card-price ticket-card-price-pending">See ticket page for price</p>
        )}
        <BuyButton t={t} className="ticket-btn-block" />
        <TicketsLeft t={t} />
        {t.enabled && data?.maxPerOrder && (
          <p className="ticket-card-note">Limit {data.maxPerOrder} per order.</p>
        )}
        {t.soldOut && <Waitlist eventName={name} maxTickets={data?.maxPerOrder || 8} />}
        {t.enabled && (
          <p className="ticket-card-note">
            You&rsquo;ll check out securely on the Marge&rsquo;s Reindeer Room ticket page.
          </p>
        )}
      </aside>
    </div>
  );
}
