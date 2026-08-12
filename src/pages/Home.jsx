import { Link } from 'react-router-dom';
import { images } from '../data/placeholderImages';
import { conceptList } from '../data/site';
import { shakerOfTheMonth } from '../data/shakers';
import ConceptCard from '../components/ConceptCard';
import './Home.css';

export default function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-heading">
        <div className="home-hero-bg" aria-hidden="true">
          <img src={images.heroWorld} alt="" />
          <div className="scrim" />
        </div>
        <div className="home-hero-content container">
          <p className="eyebrow on-dark">Welcome to the</p>
          <h1 id="home-hero-heading">World of Marge&rsquo;s</h1>
          <p className="home-hero-line">Breakfast. Dinner. Drinks. Downtown. Lake days. Late nights.</p>
          <p className="home-hero-intro">
            What started in a tiny basement bar in Downtown Fargo has grown into a collection of places
            built around good food, good drinks, warm hospitality and rooms you actually want to spend
            some time in.
          </p>
          <p className="home-hero-welcome">Welcome to our little world.</p>
        </div>
      </section>

      <section className="section where-today" aria-labelledby="where-today-heading">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Primary homepage decision</p>
            <h2 id="where-today-heading">Where Are You Today?</h2>
          </div>
          <div className="where-grid">
            <Link to="/fargo" className="where-card where-fargo">
              <img src={images.heroFargo} alt="" />
              <div className="scrim" />
              <div className="where-card-body">
                <h3>Downtown Fargo</h3>
                <p className="where-path">Breakfast &rarr; Patio &rarr; Dinner &rarr; Drinks &rarr; Lucky Lounge</p>
                <span className="btn btn-outline on-dark btn-sm">Explore Fargo</span>
              </div>
            </Link>
            <Link to="/ottertail" className="where-card where-ottertail">
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
            <img src={shakerOfTheMonth.image} alt="" />
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
            <div className="shaker-teaser-actions">
              <Link to="/the-shakers" className="btn btn-primary">Take a Look</Link>
              <Link to="/the-shakers/museum" className="btn btn-outline">Show Me a Random Shaker</Link>
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
    </>
  );
}
