import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SocialLinks from '../components/SocialLinks';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';
import './Bar.css';

export default function Bar() {
  return (
    <div className="bar-page brand-bar">
      <PageHero
        eyebrow="Marge's Bar"
        title="The Little Bar That Started It All"
        subtitle="Come have a drink where Marge's began."
        image={images.barHero}
      />

      <div className="bar-logo-wrap">
        <img src="/brand/marges-bar-logo.png" alt="Marge's Bar neon sign logo" />
      </div>

      <section className="section bar-section">
        <div className="container two-col">
          <div className="prose bar-prose">
            <p>Before the Diner.</p>
            <p>Before the Supper Club.</p>
            <p>Before thousands of salt &amp; pepper shakers started taking over the place.</p>
            <p>There was Marge&rsquo;s Bar.</p>
            <p>
              A tiny basement bar beside The Boiler Room with just enough room for a drink, a few
              friends and an idea that turned out to be considerably bigger than the room.
            </p>
            <p className="pull-quote">It&rsquo;s still here.</p>
            <div className="badge-row">
              <span className="badge bar-badge">Basement Bar</span>
              <span className="badge bar-badge">Shared Patio</span>
              <span className="badge bar-badge">Origin Story</span>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/the-marges-story" className="btn btn-primary">Read the Full Story</Link>
              <Link to="/photos/bar" className="btn btn-outline on-dark">Take a Look Around</Link>
            </div>
          </div>

          <aside className="info-panel bar-panel">
            <h3>Visit</h3>
            <dl>
              <div className="info-row"><dt>Address</dt><dd>Roberts Alley<br />Downtown Fargo</dd></div>
              <div className="info-row"><dt>Hours</dt><dd>Tue&ndash;Sat<br />6pm&ndash;2am</dd></div>
              <div className="info-row"><dt>Patio</dt><dd>Shared with the<br />Supper Club</dd></div>
              <div className="info-row"><dt>Follow</dt><dd><SocialLinks social={concepts.bar.social} /></dd></div>
            </dl>
            <Link to="/fargo/supper-club" className="btn btn-outline on-dark">Visit the Supper Club Next Door</Link>
          </aside>
        </div>
      </section>

      <section className="section-tight bar-section photo-strip-section">
        <div className="container">
          <div className="photo-strip photo-strip-2">
            <img src={images.barWineNeon} alt="Wine at the bar under the Marge's Bar neon sign" className="tall" />
            <img src={images.barNeon} alt="Cheers under the Marge's Bar neon sign" />
          </div>
        </div>
      </section>

      <section className="section-tight bar-section">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">Same patio, different room</p>
              <h3>Relationship to the Supper Club</h3>
              <p>Marge&rsquo;s Bar remains next door and shares a patio with Marge&rsquo;s Supper Club.</p>
            </div>
            <Link to="/fargo/supper-club" className="btn btn-outline on-dark">Marge&rsquo;s Supper Club</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
