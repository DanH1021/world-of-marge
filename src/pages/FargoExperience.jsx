import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';
import './DayExperience.css';

const dayplan = [
  {
    period: 'Morning',
    name: "Marge's Diner",
    copy: 'Breakfast, lunch and coffee on Broadway.',
    to: concepts.dinerFargo.path,
    image: images.dinerPancakes,
  },
  {
    period: 'Afternoon',
    name: "Marge's Bar + Patio",
    copy: 'Have a drink at the little bar where the whole thing started, or grab a seat outside on the shared patio.',
    to: concepts.bar.path,
    image: images.barPatio,
  },
  {
    period: 'Evening',
    name: "Marge's Supper Club",
    copy: 'Dinner the Midwestern way. Good food. Good drinks. Warm hospitality. No reason to hurry.',
    to: concepts.supperClub.path,
    image: images.supperDinnerTable,
  },
  {
    period: 'Later',
    name: 'Lucky Lounge',
    copy: "Feeling lucky? Step inside the Lucky Lounge for gaming, cocktails and the slightly more mischievous side of Marge's.",
    to: concepts.luckyLounge.path,
    image: images.loungeCards,
  },
];

export default function FargoExperience() {
  return (
    <>
      <PageHero
        eyebrow="Downtown Fargo"
        title="A Whole Day of Marge's"
        subtitle="Downtown Fargo — urban, historic, warm and energetic."
        image={images.heroFargo}
        size="tall"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Create a page that explains the complete experience</p>
            <h2>Breakfast to Late Night, All in a Few Blocks</h2>
          </div>
          <ol className="day-timeline">
            {dayplan.map((step) => (
              <li key={step.period} className="day-step">
                <div className="day-step-media">
                  <img src={step.image} alt="" />
                </div>
                <div className="day-step-body">
                  <p className="eyebrow">{step.period}</p>
                  <h3>{step.name}</h3>
                  <p>{step.copy}</p>
                  <Link to={step.to} className="day-step-link">
                    Explore {step.name}
                    <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true"><path d="M1 5h13.5M10 1l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-tight plan-cta">
        <div className="container plan-cta-inner">
          <div>
            <p className="eyebrow on-dark">Want it built for you?</p>
            <h2>Let Us Plan Your Whole Day</h2>
          </div>
          <Link to="/find-your-marges" className="btn btn-primary">Find Your Marge&rsquo;s</Link>
        </div>
      </section>
    </>
  );
}
