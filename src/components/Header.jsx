import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nav } from '../data/site';
import { reindeerStatus, formatNight, OPEN_NIGHTS, REINDEER_HOURS } from '../data/reindeerRoom';
import './Header.css';

function ReindeerStrip() {
  const s = reindeerStatus();
  if (s.state === 'over') return null;
  let when;
  if (s.state === 'open') when = 'Open now until 9pm';
  else if (s.state === 'tonight') when = `Open tonight ${REINDEER_HOURS}`;
  else if (s.next === OPEN_NIGHTS[0]) when = `Opens ${formatNight(s.next)}`;
  else when = `Next open ${formatNight(s.next)}`;
  return (
    <Link to="/fargo/reindeer-room" className="rr-strip">
      <span className="rr-strip-name">Marge&rsquo;s Reindeer Room</span>
      <span className="rr-strip-sep" aria-hidden="true">&middot;</span>
      <span>Holiday pop-up bar</span>
      <span className="rr-strip-sep" aria-hidden="true">&middot;</span>
      <span className="rr-strip-when">{when}</span>
      <span className="rr-strip-cta">See the dates &rarr;</span>
    </Link>
  );
}

export default function Header() {
  const seasonOn = reindeerStatus().state !== 'over';
  const navItems = nav.filter((item) => !item.seasonal || seasonOn);
  const [open, setOpen] = useState(false);
  const [eatOpen, setEatOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, []);

  function openEat() {
    clearTimeout(closeTimer.current);
    setEatOpen(true);
  }
  function scheduleCloseEat() {
    closeTimer.current = setTimeout(() => setEatOpen(false), 150);
  }

  return (
    <header className="site-header brand-umbrella" role="banner">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ReindeerStrip />
      <div className="header-bar container">
        <Link to="/" className="wordmark" aria-label="World of Marge's — home">
          <span className="wordmark-text">World of</span>
          <img src="/brand/marges-signature.png" alt="" className="wordmark-signature" />
        </Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`primary-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  className="has-children"
                  onMouseEnter={openEat}
                  onMouseLeave={scheduleCloseEat}
                >
                  <button
                    className="nav-link nav-parent"
                    aria-expanded={eatOpen}
                    onClick={() => setEatOpen((v) => !v)}
                  >
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" /></svg>
                  </button>
                  <ul className={`submenu ${eatOpen ? 'is-open' : ''}`}>
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} className="submenu-link" onClick={() => setOpen(false)}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => `nav-link${item.seasonal ? ' nav-link-festive' : ''}${isActive ? ' is-active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <Link to="/reservations" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>
            Supper Club Reservations Only
          </Link>
        </nav>
      </div>
      <div className="header-scallop scallop-trim" aria-hidden="true" />
    </header>
  );
}
