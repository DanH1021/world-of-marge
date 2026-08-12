import './ShakerCard.css';

export default function ShakerCard({ shaker, onSelect }) {
  return (
    <button type="button" className="shaker-card" onClick={() => onSelect(shaker)}>
      <div className="shaker-card-media">
        <img src={shaker.image} alt={`${shaker.name}, a ${shaker.category.toLowerCase()} shaker`} />
      </div>
      <div className="shaker-card-body">
        <p className="shaker-card-tag">{shaker.category}</p>
        <h3>{shaker.name}</h3>
        <p className="shaker-card-decade">{shaker.decade}</p>
      </div>
    </button>
  );
}
