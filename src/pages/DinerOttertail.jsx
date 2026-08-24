import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SocialLinks from '../components/SocialLinks';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';
import './Diner.css';

export default function DinerOttertail() {
  return (
    <div className="brand-diner">
      <PageHero
        eyebrow="Marge's Diner — Ottertail, Minnesota"
        title="Marge's at the Lake"
        subtitle="Coffee tastes better when you don't have anywhere to be."
        image={concepts.dinerOttertail.heroImage}
      />

      <div className="diner-logo-wrap">
        <img src="/brand/marges-diner-logo.png" alt="Marge's Diner logo" />
      </div>

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <p>Breakfast before the boat.</p>
            <p>Lunch after the lake.</p>
            <p>Another Bloody Mary because you&rsquo;re on vacation.</p>
            <p className="pull-quote">We&rsquo;ll see you tomorrow.</p>
            <p>
              Same Marge&rsquo;s family. Different setting. Marge&rsquo;s Diner in Ottertail carries the
              same Marge&rsquo;s DNA as Fargo, with a stronger Minnesota lake-country personality &mdash;
              vacation, cabin, summer, lake-day atmosphere, through and through.
            </p>
            <div className="badge-row">
              <span className="badge">Breakfast</span>
              <span className="badge">Lunch</span>
              <span className="badge">Lake Country</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <span className="btn btn-primary" style={{ opacity: 0.6, cursor: 'default' }}>Order Online — Coming Soon</span>
              <Link to="/photos/diner-ottertail" className="btn btn-outline">Take a Look Around</Link>
              <a href="/menus/diner-ottertail-menu.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View the Menu (PDF)
              </a>
            </div>
          </div>

          <aside className="info-panel">
            <h3>Visit</h3>
            <dl>
              <div className="info-row"><dt>Address</dt><dd>Ottertail, MN</dd></div>
              <div className="info-row"><dt>Hours</dt><dd>Breakfast &amp; lunch daily<br />Seasonal hours</dd></div>
              <div className="info-row"><dt>Vibe</dt><dd>Lake-day atmosphere</dd></div>
              <div className="info-row"><dt>Follow</dt><dd><SocialLinks social={concepts.dinerOttertail.social} /></dd></div>
            </dl>
            <Link to="/ottertail" className="btn btn-outline">More of the Ottertail Experience</Link>
          </aside>
        </div>
      </section>

      <section className="section-tight photo-strip-section">
        <div className="container">
          <div className="photo-strip photo-strip-4">
            <img src={images.dinerHashbrownsCrochet} alt="Breakfast at Marge's Diner, lake-cabin style" className="tall" />
            <img src={images.dinerMenuReading} alt="Reading the menu at Marge's Diner" />
            <img src={images.dinerLoungeInterior} alt="Cozy seating area inside Marge's Diner" />
            <img src={images.dinerSalad} alt="Fresh salad at Marge's Diner" />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">Heading back downtown?</p>
              <h3>Discover the Fargo Side of the World of Marge&rsquo;s</h3>
              <p>Breakfast, drinks, dinner and the Lucky Lounge, all within a few blocks.</p>
            </div>
            <Link to="/fargo" className="btn btn-outline on-dark">Explore Fargo</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
