import { useEffect, useRef } from 'react';
import './ShakerModal.css';

export default function ShakerModal({ shaker, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="shaker-modal-backdrop" onClick={onClose}>
      <div
        className="shaker-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="shaker-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="shaker-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="shaker-modal-media">
          <img src={shaker.image} alt={`${shaker.name}, a ${shaker.category.toLowerCase()} shaker`} />
        </div>
        <div className="shaker-modal-body">
          <p className="eyebrow">{shaker.category}</p>
          <h3 id="shaker-modal-title">{shaker.name}</h3>
          <dl className="shaker-modal-facts">
            <div><dt>Manufacturer</dt><dd>{shaker.manufacturer}</dd></div>
            <div><dt>Approx. Decade</dt><dd>{shaker.decade}</dd></div>
            <div><dt>Material</dt><dd>{shaker.material}</dd></div>
            <div><dt>Origin</dt><dd>{shaker.origin}</dd></div>
            <div><dt>Rarity</dt><dd>{shaker.rarity}</dd></div>
          </dl>
          <p className="shaker-modal-fact"><strong>Fun fact:</strong> {shaker.funFact}</p>
          <p className="pull-quote">&ldquo;{shaker.margeCommentary}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}
