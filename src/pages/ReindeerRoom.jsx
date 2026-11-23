import { Link } from 'react-router-dom';
import {
  REINDEER_YEAR, REINDEER_HOURS, OPEN_NIGHTS, FINAL_NIGHT,
  location, parking, menu, formatNight, reindeerStatus, seasonWeeks,
} from '../data/reindeerRoom';
import TicketEvent from '../components/TicketEvent';
import { karaokeBrunchUpcoming } from '../data/karaokeBrunch';
import './ReindeerRoom.css';

function StatusPill() {
  const s = reindeerStatus();
  let text;
  if (s.state === 'open') text = 'Open now · until 9pm';
  else if (s.state === 'tonight') text = `Open tonight · ${REINDEER_HOURS}`;
  else if (s.state === 'upcoming' && s.next === OPEN_NIGHTS[0]) text = `Opening night: ${formatNight(s.next, true)}`;
  else if (s.state === 'upcoming') text = `Next open night: ${formatNight(s.next, true)}`;
  else text = `That’s a wrap for ${REINDEER_YEAR}. See you next holiday season!`;
  return (
    <p className={`rr-status rr-status-${s.state}`}>
      <span className="rr-status-dot" aria-hidden="true" />
      {text}
    </p>
  );
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function DatesCalendar() {
  const weeks = seasonWeeks();
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date());
  return (
    <div className="rr-cal" role="table" aria-label={`Reindeer Room open nights, ${REINDEER_YEAR}`}>
      <div className="rr-cal-row rr-cal-head" role="row">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <span key={d} role="columnheader">{d}</span>
        ))}
      </div>
      {weeks.map((week) => (
        <div className="rr-cal-row" role="row" key={week[0]}>
          {week.map((iso) => {
            const [, m, d] = iso.split('-').map(Number);
            const open = OPEN_NIGHTS.includes(iso);
            const final = iso === FINAL_NIGHT;
            const past = iso < today;
            const showMonth = d === 1 || iso === week[0] && week === weeks[0];
            return (
              <span
                role="cell"
                key={iso}
                className={`rr-cal-day${open ? ' is-open' : ''}${final ? ' is-final' : ''}${past ? ' is-past' : ''}${iso === today ? ' is-today' : ''}`}
                aria-label={`${formatNight(iso, true)}: ${open ? `open ${REINDEER_HOURS}` : 'closed'}`}
              >
                <span className="rr-cal-num" aria-hidden="true">
                  {showMonth && <small>{MONTHS[m - 1]} </small>}{d}
                </span>
                {open && <span className="rr-cal-tag" aria-hidden="true">{final ? 'Last call' : '4–9'}</span>}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Menu() {
  if (!menu.sections.length) {
    return (
      <div className="rr-menu-empty">
        <p className="rr-script">Still being mixed&hellip;</p>
        <p>The Reindeer Room menu is still being finalized. Check back here soon to see what&rsquo;s pouring.</p>
      </div>
    );
  }
  return (
    <div className="rr-menu-grid">
      {menu.sections.map((section) => (
        <div className="rr-menu-section" key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.items.map((item) => (
              <li key={item.name}>
                <div className="rr-menu-line">
                  <span className="rr-menu-name">{item.name}</span>
                  {item.price && <span className="rr-menu-price">{item.price}</span>}
                </div>
                {item.description && <p>{item.description}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function ReindeerRoom() {
  return (
    <div className="reindeer-page">
      <section className="rr-hero" aria-labelledby="rr-title">
        <div className="container rr-hero-inner">
          <p className="rr-eyebrow">Holiday Pop-Up Bar &middot; Year Two</p>
          <h1 id="rr-title" className="rr-logo">
            <img src="/brand/reindeer-room-logo.png" alt="Marge's Reindeer Room" width="1600" height="585" />
          </h1>
          <p className="rr-hero-dates">
            Thursdays, Fridays &amp; Saturdays &middot; {REINDEER_HOURS}
            <br />
            Nov 27 &ndash; Dec 19
            <br />
            Plus one final night: Wednesday, Dec 23
          </p>
          <StatusPill />
          <div className="rr-actions">
            <a href="#dates" className="rr-btn rr-btn-red">See the Dates</a>
            <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="rr-btn rr-btn-pine">
              Get Directions
            </a>
          </div>
        </div>
      </section>
      <div className="rr-stripe" aria-hidden="true" />

      <section className="rr-intro" aria-labelledby="rr-intro-heading">
        <div className="container rr-intro-inner">
          <div className="rr-intro-copy">
            <h2 id="rr-intro-heading" className="rr-script">Back for round two</h2>
            <p>
              Marge&rsquo;s Reindeer Room is back. For one month only, the old Teddy&rsquo;s space at
              212 Broadway turns into Marge&rsquo;s holiday pop-up bar.
            </p>
            <p>
              Bring your people, grab a drink, and get into the spirit. When it&rsquo;s gone,
              it&rsquo;s gone until next year.
            </p>
          </div>
          <dl className="rr-facts">
            <div>
              <dt>When</dt>
              <dd>Thu &ndash; Sat, {REINDEER_HOURS}<br />Nov 27 &ndash; Dec 19 + Wed, Dec 23</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{location.address}, {location.city}<br />{location.note}</dd>
            </div>
            <div>
              <dt>Parking</dt>
              <dd>{parking.name}<br />{parking.note}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="rr-section rr-dates" id="dates" aria-labelledby="rr-dates-heading">
        <div className="container">
          <div className="rr-head">
            <h2 id="rr-dates-heading" className="rr-script">Open Nights</h2>
            <p>{OPEN_NIGHTS.length} nights, {REINDEER_HOURS} every night we&rsquo;re open.</p>
          </div>
          <DatesCalendar />
          <ul className="rr-night-list">
            {OPEN_NIGHTS.map((iso) => (
              <li key={iso} className={iso === FINAL_NIGHT ? 'is-final' : ''}>
                <span>{formatNight(iso, true)}</span>
                <span>{iso === FINAL_NIGHT ? `Final night · ${REINDEER_HOURS}` : REINDEER_HOURS}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {karaokeBrunchUpcoming() && (
        <section className="rr-section rr-event" aria-label="Christmas Karaoke Brunch tickets">
          <div className="container">
            <TicketEvent variant="compact" />
          </div>
        </section>
      )}

      <section className="rr-section rr-menu" id="menu" aria-labelledby="rr-menu-heading">
        <div className="container">
          <div className="rr-head">
            <h2 id="rr-menu-heading" className="rr-script">The Menu</h2>
          </div>
          <Menu />
        </div>
      </section>

      <section className="rr-section rr-visit" aria-labelledby="rr-visit-heading">
        <div className="container">
          <div className="rr-head">
            <h2 id="rr-visit-heading" className="rr-script">Getting Here</h2>
          </div>
          <div className="rr-visit-grid">
            <div className="rr-card">
              <p className="rr-card-label">The Bar</p>
              <h3>{location.address}</h3>
              <p>{location.city}<br />{location.note}</p>
              <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="rr-btn rr-btn-red">
                Get Directions
              </a>
            </div>
            <div className="rr-card">
              <p className="rr-card-label">Parking</p>
              <h3>{parking.name}</h3>
              <p>Our recommended spot.<br /><strong>{parking.note}.</strong></p>
              <a href={parking.mapsUrl} target="_blank" rel="noopener noreferrer" className="rr-btn rr-btn-pine">
                Find the Garage
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rr-more" aria-labelledby="rr-more-heading">
        <div className="container rr-more-inner">
          <div>
            <h2 id="rr-more-heading" className="rr-script">Make a night of it</h2>
            <p>The rest of the Marge&rsquo;s family is just a few blocks away in downtown Fargo.</p>
          </div>
          <div className="rr-actions">
            <Link to="/fargo/supper-club" className="rr-btn rr-btn-gold">Marge&rsquo;s Supper Club</Link>
            <Link to="/fargo/bar" className="rr-btn rr-btn-ghost">Marge&rsquo;s Bar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
