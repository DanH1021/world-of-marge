import { Link } from 'react-router-dom';
import { footerColumns, CLOSING_LINE } from '../data/site';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer brand-umbrella" role="contentinfo">
      <div className="scallop-trim scallop-mustard" aria-hidden="true" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-wordmark">World of Marge&rsquo;s</span>
            <p className="footer-tagline">Breakfast. Lunch. Dinner. Drinks. Late nights. Downtown. Lake days.</p>
            <div className="footer-social" aria-label="Social media">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="TikTok">TikTok</a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav className="footer-col" key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                    {link.sub && <span className="footer-sub">{link.sub}</span>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="rule" />

        <div className="footer-bottom">
          <p className="footer-closing">{CLOSING_LINE}</p>
          <div className="footer-legal">
            <Link to="/careers">Careers</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/accessibility">Accessibility</Link>
            <span>&copy; {new Date().getFullYear()} World of Marge&rsquo;s</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
