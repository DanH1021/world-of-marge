import { Link } from 'react-router-dom';
import { images } from '../data/placeholderImages';
import { conceptList, concepts } from '../data/site';
import { shakers, shakerOfTheMonth } from '../data/shakers';
import ConceptCard from '../components/ConceptCard';
import './Home.css';

const rooster = shakers[0];

const innerMarges = [
  {
    archetype: 'The Regular',
    line: 'You’ve got a booth. The server knows your order. You’ve never once opened the menu.',
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
    archetype: 'The Basement Legend',
    line: 'You know the good bars don’t need a sign, a window, or ground-floor access.',
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
    archetype: 'The Night Owl',
    line: 'One more hand. One more round. One more hour you swore you weren’t staying for.',
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
    line: 'Boat’s in the water by 8am. Pancakes by 8:15. No regrets, ever.',
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
            <h1 id="home-hero-heading">World of Marge&rsquo;s</h1>
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
                <img src={images.heroWorld} alt="" />
              </div>
              <p className="polaroid-caption">our little world</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section where-today" aria-labelledby="where-today-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Primary homepage decision</p>
            <h2 id="where-today-heading">Where Are You Today?</h2>
          </div>
          <div className="where-grid">
            <Link to="/fargo" className="where-card tilt-a">
              <img src={images.heroFargo} alt="" />
              <div className="scrim" />
              <div className="where-card-body">
                <h3>Downtown Fargo</h3>
                <p className="where-path">Breakfast &rarr; Patio &rarr; Dinner &rarr; Drinks &rarr; Lucky Lounge</p>
                <span className="btn btn-outline on-dark btn-sm">Explore Fargo</span>
              </div>
            </Link>
            <Link to="/ottertail" className="where-card tilt-d">
              <img src={images.heroOttertail} alt="" />
              <div className="scrim" />
              <div className="where-card-body">
                <h3>Ottertail</h3>
                <p className="where-path">Breakfast &rarr; Lake &rarr; Lunch &rarr; Lake &rarr; Repeat</p>
                <span className="btn btn-outline on-dark btn-sm">Explore Ottertail</span>
              </div>
            </Link>
          </div>
          <p className="where-note">
            Downtown Fargo feels urban, historic, warm and energetic. Ottertail feels like Minnesota
            lake country and vacation mode &mdash; immediately.
          </p>
        </div>
      </section>

      <section className="section inner-marge" aria-labelledby="inner-marge-heading">
        <div className="container">
          <div className="inner-marge-head">
            <p className="eyebrow">Which one are you?</p>
            <h2 id="inner-marge-heading">Find Your Inner Marge</h2>
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
            <p>Each location has its own personality &mdash; while clearly belonging to the same family.</p>
          </div>
          <div className="family-grid">
            {conceptList.map((concept) => (
              <ConceptCard concept={concept} key={concept.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight shaker-teaser" aria-labelledby="shaker-teaser-heading">
        <div className="container shaker-teaser-inner">
          <div className="shaker-teaser-media">
            <div className="polaroid shaker-photo-a tilt-e">
              <div className="polaroid-photo">
                <img src={shakerOfTheMonth.image} alt="" />
              </div>
            </div>
            <div className="polaroid shaker-photo-b tilt-b">
              <div className="polaroid-photo">
                <img src={images.shakerVintageShelf} alt="" />
              </div>
            </div>
            <div className="washi-tape washi-teal shaker-photo-tape" aria-hidden="true" />
          </div>
          <div className="shaker-teaser-copy">
            <p className="eyebrow">Yes, really</p>
            <h2 id="shaker-teaser-heading">Yes. Those Are All Salt &amp; Pepper Shakers.</h2>
            <p>
              For decades, salt &amp; pepper shakers were tiny pieces of everyday art &mdash; souvenirs, gifts,
              decorations and wonderfully unnecessary objects people collected simply because they made
              them smile. We happen to have a lot of them. Individually, they&rsquo;re tiny curiosities.
              Together, they&rsquo;re pretty spectacular.
            </p>
            <div className="sticky-note tilt-c shaker-quote">
              <p>&ldquo;{rooster.margeCommentary}&rdquo; &mdash; Marge, on the {rooster.name}</p>
            </div>
            <div className="shaker-teaser-actions">
              <Link to="/the-shakers" className="btn-stamp">Take a<br />Look</Link>
              <Link to="/the-shakers/museum" className="btn-ticket">Show Me a Random Shaker</Link>
            </div>
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
