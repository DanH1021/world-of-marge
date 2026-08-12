import { Link } from 'react-router-dom';
import './ConceptCard.css';

export default function ConceptCard({ concept, size = 'default' }) {
  return (
    <Link to={concept.path} className={`concept-card concept-card-${size} tone-${concept.color}`}>
      <div className="concept-card-media">
        <img src={concept.heroImage} alt="" />
      </div>
      <div className="concept-card-body">
        <p className="concept-card-tag">{concept.tag}</p>
        <h3>{concept.name}</h3>
        <p className="concept-card-place">{concept.place}</p>
        <span className="concept-card-cta">
          Take a look
          <svg width="16" height="10" viewBox="0 0 16 10" aria-hidden="true"><path d="M1 5h13.5M10 1l4.5 4-4.5 4" stroke="currentColor" strokeWidth="1.4" fill="none" /></svg>
        </span>
      </div>
    </Link>
  );
}
