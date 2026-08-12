import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import './SupperClub.css';

// Lazy-loaded so the Firebase SDK (used only by the live menu) doesn't get
// pulled into every page's bundle — only visitors who reach the Supper Club
// menu section download it.
const LiveMenu = lazy(() => import('../components/LiveMenu'));

export default function SupperClub() {
  return (
    <div className="brand-supper-club">
      <PageHero
        eyebrow="Marge's Supper Club"
        title="Dinner Should Feel Like Going Out to Dinner Again."
        image={images.supperDinnerTable}
        size="tall"
      />

      <div className="supper-club-logo-wrap">
        <img src="/brand/marges-supper-club-logo.png" alt="Marge's Supper Club & Lucky Lounge logo" />
      </div>

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <p>There was a time when going out for dinner was the event.</p>
            <p>You had a drink before dinner.</p>
            <p>You took your time.</p>
            <p>You ordered something you probably weren&rsquo;t making at home.</p>
            <p>Somebody ordered another round.</p>
            <p>And nobody was checking the clock.</p>
            <p className="pull-quote">We think there&rsquo;s something worth keeping about that.</p>
            <p>
              Marge&rsquo;s Supper Club takes inspiration from the great Midwestern supper club while
              giving the experience our own personality.
            </p>
            <div className="badge-row">
              <span className="badge">Dinner</span>
              <span className="badge">Cocktails</span>
              <span className="badge">Private Dining</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#reserve" className="btn btn-primary">Save Us a Seat</a>
              <a href="#menu" className="btn btn-outline">See What&rsquo;s for Dinner</a>
            </div>
          </div>

          <aside className="info-panel" id="reserve">
            <h3>Visit</h3>
            <dl>
              <div className="info-row"><dt>Address</dt><dd>Roberts Alley<br />Downtown Fargo</dd></div>
              <div className="info-row"><dt>Hours</dt><dd>Dinner nightly<br />Hours vary</dd></div>
              <div className="info-row"><dt>Reservations</dt><dd>Recommended</dd></div>
              <div className="info-row"><dt>Follow</dt><dd>Instagram &middot; Facebook</dd></div>
            </dl>
            <a href="#reserve" className="btn btn-primary">Save Us a Seat</a>
          </aside>
        </div>
      </section>

      <section id="menu" className="section menu-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Fresh from the kitchen</p>
            <h2>Tonight&rsquo;s Menu</h2>
            <p>Pulled live from the kitchen&rsquo;s menu system, so what you see here is what&rsquo;s actually on tonight.</p>
          </div>
          <Suspense fallback={<div className="live-menu-state"><p className="eyebrow">Loading tonight&rsquo;s menu&hellip;</p></div>}>
            <LiveMenu sourceKey="supper-club" />
          </Suspense>
        </div>
      </section>

      <section className="section-tight photo-strip-section">
        <div className="container">
          <div className="photo-strip">
            <img src={images.supperSteak} alt="Plated dinner entree at Marge's Supper Club" className="tall" />
            <img src={images.supperCocktail} alt="Cocktail at Marge's Supper Club" />
            <img src={images.supperCandlelight} alt="Candlelit dining room at Marge's Supper Club" />
          </div>
        </div>
      </section>

      <section className="section lucky-entrance">
        <div className="container lucky-entrance-inner">
          <img src={images.loungeCards} alt="" className="lucky-entrance-img" />
          <div>
            <p className="eyebrow on-dark">Feeling lucky?</p>
            <h2>Hidden Inside the Supper Club: The Lucky Lounge</h2>
            <p>A little darker. A little moodier. And probably a little later.</p>
            <Link to="/fargo/supper-club/lucky-lounge" className="btn btn-primary">Enter the Lucky Lounge</Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">Before or after dinner</p>
              <h3>Marge&rsquo;s Bar &amp; Shared Patio</h3>
              <p>Marge&rsquo;s Bar remains next door and shares a patio with the Supper Club.</p>
            </div>
            <Link to="/fargo/bar" className="btn btn-outline on-dark">Marge&rsquo;s Bar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
