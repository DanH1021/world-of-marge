import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { whereOptions, planOptions, buildItinerary } from '../data/itinerary';
import './FindYourMarges.css';

export default function FindYourMarges() {
  const [where, setWhere] = useState(null);
  const [plan, setPlan] = useState(null);

  const itinerary = where && plan ? buildItinerary(where, plan) : null;
  const whereLabel = whereOptions.find((o) => o.key === where)?.label;
  const planLabel = planOptions.find((o) => o.key === plan)?.label;

  function reset() {
    setWhere(null);
    setPlan(null);
  }

  return (
    <div className="brand-umbrella">
      <PageHero
        eyebrow="Interactive Feature"
        title="Plan My Marge's Day"
        subtitle="Answer a couple of questions. We'll build you a (slightly humorous) itinerary."
        image={images.peopleCheers}
        size="short"
      />

      <section className="section">
        <div className="container quiz-container">
          {!where && (
            <div className="quiz-step">
              <p className="eyebrow">Question 1 of 2</p>
              <h2>Where Are You?</h2>
              <div className="quiz-options">
                {whereOptions.map((opt) => (
                  <button key={opt.key} className="quiz-option" onClick={() => setWhere(opt.key)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {where && !plan && (
            <div className="quiz-step">
              <p className="eyebrow">Question 2 of 2 &middot; {whereLabel}</p>
              <h2>What&rsquo;s the Plan?</h2>
              <div className="quiz-options quiz-options-wrap">
                {planOptions.map((opt) => (
                  <button key={opt.key} className="quiz-option" onClick={() => setPlan(opt.key)}>
                    {opt.label}
                  </button>
                ))}
              </div>
              <button className="quiz-back" onClick={() => setWhere(null)}>&larr; Back</button>
            </div>
          )}

          {itinerary && (
            <div className="quiz-result">
              <p className="eyebrow">{whereLabel} &middot; {planLabel}</p>
              <h2>Your Marge&rsquo;s Day</h2>
              <ol className="itinerary-list">
                {itinerary.map((stop, i) => (
                  <li key={i}>
                    <span className="itinerary-time">{stop.time}</span>
                    <span className="itinerary-activity">
                      {stop.to ? <Link to={stop.to}>{stop.activity}</Link> : stop.activity}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="quiz-result-actions">
                <button className="btn btn-outline" onClick={reset}>Plan Another Day</button>
                <Link to="/eat-and-drink" className="btn btn-primary">See Everything on the Menu</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
