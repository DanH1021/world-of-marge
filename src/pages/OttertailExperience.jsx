import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';
import './DayExperience.css';

export default function OttertailExperience() {
  return (
    <>
      <PageHero
        eyebrow="Ottertail, Minnesota"
        title="Breakfast &rarr; Lake &rarr; Lunch &rarr; Lake &rarr; Repeat"
        subtitle="Ottertail should immediately evoke Minnesota lake country and vacation mode."
        image={images.lakeSunset}
        size="tall"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Same family, different setting</p>
            <h2>Marge&rsquo;s Goes to the Lake</h2>
            <p>
              Same Marge&rsquo;s DNA as Fargo, with a stronger Minnesota lake-country personality.
              Vacation, cabin, summer, lake-day atmosphere &mdash; connected to Marge&rsquo;s while having
              its own sense of place.
            </p>
          </div>

          <ol className="day-timeline">
            <li className="day-step">
              <div className="day-step-media">
                <img src={images.lakeBreakfast} alt="" />
              </div>
              <div className="day-step-body">
                <p className="eyebrow">Morning</p>
                <h3>{concepts.dinerOttertail.name}</h3>
                <p>Coffee tastes better when you don&rsquo;t have anywhere to be. Breakfast before the boat.</p>
                <Link to={concepts.dinerOttertail.path} className="day-step-link">
                  Explore Marge&rsquo;s Diner — Ottertail
                  <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true"><path d="M1 5h13.5M10 1l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                </Link>
              </div>
            </li>
            <li className="day-step">
              <div className="day-step-media">
                <img src={images.lakeDock} alt="" />
              </div>
              <div className="day-step-body">
                <p className="eyebrow">Afternoon</p>
                <h3>Lake Day</h3>
                <p>Sun, water, and no particular schedule. Lunch after the lake.</p>
              </div>
            </li>
            <li className="day-step">
              <div className="day-step-media">
                <img src={images.lakeBoat} alt="" />
              </div>
              <div className="day-step-body">
                <p className="eyebrow">Repeat</p>
                <h3>Another Bloody Mary, Because You&rsquo;re on Vacation</h3>
                <p>We&rsquo;ll see you tomorrow.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">More Marge&rsquo;s, closer to home</p>
              <h3>Prefer Downtown Fargo?</h3>
              <p>Breakfast, drinks, dinner and the Lucky Lounge — all within a few blocks.</p>
            </div>
            <Link to="/fargo" className="btn btn-outline on-dark">Explore Fargo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
