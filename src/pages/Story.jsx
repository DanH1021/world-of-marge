import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { timeline, TIMELINE_CLOSING_LINE } from '../data/timeline';
import './Story.css';

export default function Story() {
  return (
    <>
      <PageHero
        eyebrow="How It All Started"
        title="The Marge's Story"
        subtitle="An interactive timeline of how a tiny basement bar grew into a whole little world."
        image={images.barBasement}
      />

      <section className="section">
        <div className="container">
          <ol className="timeline">
            {timeline.map((step, i) => (
              <li className="timeline-step" key={step.key}>
                <div className="timeline-marker">
                  <span className="timeline-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="timeline-line" aria-hidden="true" />
                </div>
                <div className="timeline-body">
                  <p className="eyebrow">{step.label}</p>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                  {step.to && (
                    <Link to={step.to} className="day-step-link">
                      Visit {step.label}
                      <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true"><path d="M1 5h13.5M10 1l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>

          <p className="timeline-closing">{TIMELINE_CLOSING_LINE}</p>
        </div>
      </section>
    </>
  );
}
