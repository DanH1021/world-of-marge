import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';
import './Diner.css';

const c = concepts.dinerFargo;

export default function DinerFargo() {
  return (
    <div className="brand-diner">
      <PageHero
        eyebrow="Marge's Diner — Fargo"
        title="Breakfast &amp; Lunch, Every Day"
        subtitle="Best salad bar on Broadway."
        image={c.heroImage}
      />

      <div className="diner-logo-wrap">
        <img src="/brand/marges-diner-logo.png" alt="Marge's Diner logo" />
      </div>

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <p className="eyebrow">Comfortable neighborhood diner</p>
            <h2>Downtown Fargo&rsquo;s Favorite</h2>
            <p>
              Marge&rsquo;s Diner is a breakfast-and-lunch spin on the spirit of Marge&rsquo;s Bar. Located
              at 220 Broadway in Downtown Fargo, the diner serves breakfast and lunch seven days a week
              and is home to what many consider the &ldquo;best salad bar on Broadway&rdquo; Monday through
              Friday.
            </p>
            <p>
              Inside, you&rsquo;ll find a delightfully overwhelming collection of salt and pepper shakers,
              bundt pans, collectible plates, cookie jars, and countless other treasures &mdash; making
              it something of a Midwestern hoarder&rsquo;s dream.
            </p>
            <p>
              During the summer months, our patio is one of downtown&rsquo;s favorite spots to gather, and
              our dining room is available for private evening socials and events.
            </p>
            <div className="badge-row">
              <span className="badge">Breakfast</span>
              <span className="badge">Lunch</span>
              <span className="badge">Coffee</span>
              <span className="badge">Downtown Fargo</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="https://www.toasttab.com/marges-diner-fargo" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Order Online
              </a>
              <a href="#menu" className="btn btn-outline">See What&rsquo;s for Breakfast</a>
            </div>
          </div>

          <aside className="info-panel">
            <h3>Visit</h3>
            <dl>
              <div className="info-row"><dt>Address</dt><dd>220 N Broadway Dr<br />Fargo, ND</dd></div>
              <div className="info-row"><dt>Hours</dt><dd>7 days a week<br />8am – 2pm</dd></div>
              <div className="info-row"><dt>Phone</dt><dd>(701) 555-0139</dd></div>
              <div className="info-row"><dt>Follow</dt><dd>Instagram &middot; Facebook</dd></div>
            </dl>
            <Link to="/photos/diner-fargo" className="btn btn-outline">Take a Look Around</Link>
          </aside>
        </div>
      </section>

      <section id="menu" className="section-tight photo-strip-section">
        <div className="container">
          <div className="photo-strip">
            <img src={images.dinerPancakes} alt="Stack of pancakes with syrup at Marge's Diner" className="tall" />
            <img src={images.dinerSaladBar} alt="Marge's Diner salad bar spread" />
            <img src={images.dinerShakerShelf} alt="Collection of vintage salt and pepper shakers on a shelf" />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">Just around the corner</p>
              <h3>If You Enjoy the Quirky Charm of the Diner&hellip;</h3>
              <p>Be sure to visit Marge&rsquo;s Bar and Marge&rsquo;s Supper Club just a few blocks away in Roberts Alley.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/fargo/bar" className="btn btn-outline on-dark">Marge&rsquo;s Bar</Link>
              <Link to="/fargo/supper-club" className="btn btn-outline on-dark">Supper Club</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
