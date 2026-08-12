import { useEffect, useRef } from 'react';
import './Lightbox.css';

export default function Lightbox({ photo, onClose, onPrev, onNext }) {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous photo">&lsaquo;</button>
      <div className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption || ''} />
        {photo.caption && <p className="lightbox-caption">{photo.caption}</p>}
      </div>
      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next photo">&rsaquo;</button>
    </div>
  );
}
