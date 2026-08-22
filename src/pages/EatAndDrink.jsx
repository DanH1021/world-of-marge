import PageHero from '../components/PageHero';
import ConceptCard from '../components/ConceptCard';
import { images } from '../data/placeholderImages';
import { concepts } from '../data/site';

export default function EatAndDrink() {
  return (
    <div className="brand-umbrella">
      <PageHero
        eyebrow="Eat & Drink"
        title="Find Your Marge's"
        subtitle="Breakfast, lunch, dinner, drinks and late nights across the World of Marge's."
        image={images.heroWorld}
        size="short"
      />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Downtown Fargo</p>
            <h2>Breakfast to Late Night</h2>
          </div>
          <div className="family-grid">
            <ConceptCard concept={concepts.dinerFargo} />
            <ConceptCard concept={concepts.bar} />
            <ConceptCard concept={concepts.supperClub} />
            <ConceptCard concept={concepts.luckyLounge} />
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Ottertail, Minnesota</p>
            <h2>Lake Country</h2>
          </div>
          <div className="family-grid">
            <ConceptCard concept={concepts.dinerOttertail} />
          </div>
        </div>
      </section>
    </div>
  );
}
