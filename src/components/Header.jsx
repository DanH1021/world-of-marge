import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { nav } from '../data/site';
import './Header.css';

export default function Header() {
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
            {nav.map((item) =>
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
                    className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <Link to="/fargo/supper-club" className="btn btn-primary btn-sm nav-cta" onClick={() => setOpen(false)}>
            Save Us a Seat
          </Link>
        </nav>
      </div>
      <div className="header-scallop scallop-trim" aria-hidden="true" />
    </header>
  );
}
