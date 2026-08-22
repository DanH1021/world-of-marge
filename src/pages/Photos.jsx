import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { galleryList } from '../data/galleries';
import './Photos.css';

export default function Photos() {
  return (
    <div className="brand-umbrella">
      <PageHero
        eyebrow="Take a Look Around"
        title="Photos"
        subtitle="Photography is a major asset here — every corner of the World of Marge's has its own gallery."
        image={images.peopleDining}
        size="short"
      />

      <section className="section">
        <div className="container">
          <div className="photos-hub-grid">
            {galleryList.map((g) => (
              <Link to={`/photos/${g.slug}`} className="photos-hub-card" key={g.slug}>
                <img src={g.photos[0].src} alt="" />
                <div className="scrim" />
                <div className="photos-hub-body">
                  <p className="eyebrow on-dark">{g.concept.place}</p>
                  <h3>{g.concept.name === "Marge's Diner" ? `${g.concept.name} — ${g.concept.region === 'ottertail' ? 'Ottertail' : 'Fargo'}` : g.concept.name}</h3>
                  <span>{g.photos.length} photos</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
