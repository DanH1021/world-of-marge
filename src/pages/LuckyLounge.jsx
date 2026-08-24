import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import './LuckyLounge.css';

export default function LuckyLounge() {
  return (
    <div className="lucky-page brand-supper-club">
      <PageHero
        eyebrow="Inside Marge's Supper Club"
        title="Feeling Lucky?"
        subtitle="A little darker. A little moodier. And probably a little later."
        image={images.loungePattern}
      />

      <div className="lucky-logo-wrap">
        <img src="/brand/marges-supper-club-logo.png" alt="Marge's Supper Club & Lucky Lounge logo" />
      </div>

      <div className="lucky-suits" aria-hidden="true">
        <span>&spades;</span><span>&hearts;</span><span>&diams;</span><span>&clubs;</span>
      </div>

      <section className="section lucky-section">
        <div className="container two-col">
          <div className="prose lucky-prose">
            <p>Hidden inside Marge&rsquo;s Supper Club is the Lucky Lounge.</p>
            <p>Gaming. Drinks. A slightly more mischievous side of Marge&rsquo;s.</p>
            <div className="badge-row">
              <span className="badge badge-dark">Gaming</span>
              <span className="badge badge-dark">Cocktails</span>
              <span className="badge badge-dark">Later Hours</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/fargo/supper-club" className="btn btn-outline on-dark">Back to the Supper Club</Link>
            </div>
          </div>

          <aside className="info-panel lucky-panel">
            <h3>Visit</h3>
            <dl>
              <div className="info-row"><dt>Location</dt><dd>Inside Marge&rsquo;s<br />Supper Club</dd></div>
              <div className="info-row"><dt>Hours</dt><dd>Later<br />Hours vary</dd></div>
              <div className="info-row"><dt>Gaming</dt><dd>Responsible gaming<br />info available on request</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section-tight lucky-stainedglass" aria-hidden="true">
        <div className="glass-strip">
          <span style={{ background: 'var(--rust)' }} />
          <span style={{ background: 'var(--forest)' }} />
          <span style={{ background: '#7a2436' }} />
          <span style={{ background: '#1f4d3a' }} />
          <span style={{ background: 'var(--ink-soft)' }} />
          <span style={{ background: 'var(--forest-dark)' }} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: 'center' }}>Photos coming soon</p>
        </div>
      </section>
    </div>
  );
}
