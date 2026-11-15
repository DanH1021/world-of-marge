import { Link } from 'react-router-dom';
import { reindeerStatus, formatNight, OPEN_NIGHTS, REINDEER_HOURS } from '../data/reindeerRoom';
import './ReindeerBanner.css';

/** Seasonal promo strip for the homepage. Hides itself once the season's over. */
export default function ReindeerBanner() {
  const s = reindeerStatus();
  if (s.state === 'over') return null;
  let when;
  if (s.state === 'open') when = 'Open right now until 9pm';
  else if (s.state === 'tonight') when = `Open tonight, ${REINDEER_HOURS}`;
  else if (s.next === OPEN_NIGHTS[0]) when = `Opens ${formatNight(s.next, true)}`;
  else when = `Next open ${formatNight(s.next, true)}`;
  return (
    <section className="rr-banner" aria-label="Marge's Reindeer Room holiday pop-up">
      <Link to="/fargo/reindeer-room" className="rr-banner-inner container">
        <img src="/brand/reindeer-room-logo.png" alt="Marge's Reindeer Room" className="rr-banner-logo" />
        <span className="rr-banner-copy">
          <span className="rr-banner-title">The holiday pop-up is back</span>
          <span className="rr-banner-when">{when} &middot; Thu&ndash;Sat {REINDEER_HOURS} through Dec 23</span>
        </span>
        <span className="rr-banner-cta">See the dates &rarr;</span>
      </Link>
    </section>
  );
}
