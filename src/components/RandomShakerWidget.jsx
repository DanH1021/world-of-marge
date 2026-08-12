import { useState } from 'react';
import { randomShaker } from '../data/shakers';
import ShakerModal from './ShakerModal';
import './RandomShakerWidget.css';

export default function RandomShakerWidget() {
  const [current, setCurrent] = useState(() => randomShaker());
  const [spinning, setSpinning] = useState(false);
  const [open, setOpen] = useState(false);

  function spin() {
    setSpinning(true);
    window.setTimeout(() => {
      setCurrent((prev) => randomShaker(prev?.id));
      setSpinning(false);
    }, 220);
  }

  return (
    <div className="random-shaker">
      <button
        type="button"
        className={`random-shaker-frame ${spinning ? 'is-spinning' : ''}`}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <img src={current.image} alt={`${current.name}, a ${current.category.toLowerCase()} shaker from the collection`} />
        <span className="random-shaker-label">
          <strong>{current.name}</strong>
          <span>{current.category} &middot; {current.decade}</span>
        </span>
      </button>
      <div className="random-shaker-actions">
        <button type="button" className="btn btn-primary" onClick={spin}>Show Me a Random Shaker</button>
        <button type="button" className="btn btn-outline" onClick={() => setOpen(true)}>See Details</button>
      </div>
      {open && <ShakerModal shaker={current} onClose={() => setOpen(false)} />}
    </div>
  );
}
