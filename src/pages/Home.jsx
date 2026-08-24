import { Link } from 'react-router-dom';
import { images } from '../data/placeholderImages';
import { conceptList, concepts } from '../data/site';
import ConceptCard from '../components/ConceptCard';
import './Home.css';

const innerMarges = [
  {
    archetype: 'The Early Bird',
    line: 'You know if you don’t get here early, you’re standing in line for breakfast.',
    label: "Marge's Diner, Fargo",
    to: concepts.dinerFargo.path,
    tilt: 'tilt-a',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 9.5h1.4a2.3 2.3 0 0 1 0 4.6H16" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    archetype: 'The Regular',
    line: 'You’ve got a favorite spot at the rail, and everybody knows it’s yours.',
    label: "Marge's Bar",
    to: concepts.bar.path,
    tilt: 'tilt-c',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 4h14l-7 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 12v7M8.5 19h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    archetype: 'The Occasion Maker',
    line: 'You call it dinner. It’s actually an event, and you dressed for it.',
    label: "Marge's Supper Club",
    to: concepts.supperClub.path,
    tilt: 'tilt-b',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 2v9c0 1.2.8 1.8 1.8 1.8s1.8-.6 1.8-1.8V2M9.8 12.8V22M8 2v4M11.6 2v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    archetype: 'The Lucky Duck',
    line: 'You know the odds are for charity. You’re still trying to beat them.',
    label: 'Lucky Lounge',
    to: concepts.luckyLounge.path,
    tilt: 'tilt-e',
    dark: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3c3 3 5 5.5 5 8.5A5 5 0 0 1 7 11.5C7 8.5 9 6 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    archetype: 'The Lake Person',
    line: 'Breakfast at 8. Lake by 9.',
    label: "Marge's Diner, Ottertail",
    to: concepts.dinerOttertail.path,
    tilt: 'tilt-d',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 10c1.8-2 3.6-2 5.4 0s3.6 2 5.4 0 3.6-2 5.4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 15c1.8-2 3.6-2 5.4 0s3.6 2 5.4 0 3.6-2 5.4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="brand-umbrella">
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="container home-hero-inner">
          <div className="index-card home-hero-card tilt-a">
            <p className="eyebrow">Welcome to the</p>
            <h1 id="home-hero-heading">
              World of <img src="/brand/marges-signature.png" alt="Marge's" className="hero-signature" />
            </h1>
            <p className="home-hero-line hand-line">Breakfast. Dinner. Drinks. Downtown. Lake days. Late nights.</p>
            <p className="home-hero-intro">
              What started in a tiny basement bar in Downtown Fargo has grown into a collection of places
              built around good food, good drinks, warm hospitality and rooms you actually want to spend
              some time in.
            </p>
            <p className="home-hero-welcome hand-line">&mdash; welcome to our little world</p>
          </div>
          <div className="home-hero-photo">
            <div className="washi-tape washi-mustard home-hero-tape" aria-hidden="true" />
            <div className="polaroid tilt-c">
              <div className="polaroid-photo">
                <img src={images.homeOurLittleWorld} alt="" />
              </div>
              <p className="polaroid-caption">our little world</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section inner-marge" aria-labelledby="inner-marge-heading">
        <div className="container">
          <div className="inner-marge-head">
            <p className="eyebrow">Which one are you?</p>
            <h2 id="inner-marge-heading">
              Find Your Inner <img src="/brand/marges-signature-short.png" alt="Marge" className="inner-marge-signature" />
            </h2>
            <p className="hand-line inner-marge-sub">
              five doors, five totally different nights out &mdash; pick whichever one sounds like you
            </p>
          </div>
          <div className="inner-marge-grid">
            {innerMarges.map((card) => (
              <Link
                to={card.to}
                key={card.label}
                className={`inner-marge-card ${card.tilt}${card.dark ? ' inner-marge-dark' : ''}`}
              >
                <span className="inner-marge-icon">{card.icon}</span>
                <h3>{card.archetype}</h3>
                <p className="hand-line">{card.line}</p>
                <span className="inner-marge-label">{card.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section family-section" aria-labelledby="family-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The Whole Family</p>
            <h2 id="family-heading">Every Corner of the World of Marge&rsquo;s</h2>
            <p>No matter what you are in the mood for, Marge has you covered.</p>
          </div>
          <div className="family-grid">
            {conceptList.map((concept) => (
              <ConceptCard concept={concept} key={concept.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight story-teaser" aria-labelledby="story-teaser-heading">
        <div className="container story-teaser-inner">
          <p className="eyebrow">How it all started</p>
          <h2 id="story-teaser-heading">The Marge&rsquo;s Story</h2>
          <p>
            A tiny basement bar. A diner up the block. A lake house in Minnesota. And a supper club that
            brought the whole thing full circle. Follow the story from the beginning.
          </p>
          <Link to="/the-marges-story" className="btn btn-outline">Read the Story</Link>
        </div>
      </section>

      <section className="section-tight plan-cta" aria-labelledby="plan-cta-heading">
        <div className="container plan-cta-inner">
          <div>
            <p className="eyebrow on-dark">Not sure where to start?</p>
            <h2 id="plan-cta-heading">Let Us Plan Your Marge&rsquo;s Day</h2>
            <p>Answer a couple of questions. We&rsquo;ll build you a (slightly humorous) itinerary.</p>
          </div>
          <Link to="/find-your-marges" className="btn btn-primary">Find Your Marge&rsquo;s</Link>
        </div>
      </section>
    </div>
  );
}
