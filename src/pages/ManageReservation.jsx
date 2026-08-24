import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { formatDateLabel, formatTime12h } from '../data/reservationConfig';
import {
  cancelReservation,
  getReservationByConfirmation,
  getReservationsByNamePhone,
} from '../lib/firebaseReservations';
import './ManageReservation.css';

const STATUS_LABELS = {
  confirmed: 'Confirmed',
  cancelled: 'Cancelled',
  seated: 'Seated',
  completed: 'Completed',
  'no-show': 'No-show',
};

function ReservationCard({ reservation, onCancelled }) {
  const [confirming, setConfirming] = useState(false);
  const [cancelState, setCancelState] = useState('idle'); // idle | cancelling | error

  async function doCancel() {
    setCancelState('cancelling');
    try {
      await cancelReservation(reservation.confirmationNumber);
      onCancelled(reservation.confirmationNumber);
      setConfirming(false);
      setCancelState('idle');
    } catch (err) {
      console.error('Cancel failed:', err);
      setCancelState('error');
    }
  }

  const statusLabel = STATUS_LABELS[reservation.status] || reservation.status;

  return (
    <div className="manage-card">
      <div className="manage-card-head">
        <p className="manage-card-number">{reservation.confirmationNumber}</p>
        <span className={`manage-status manage-status-${reservation.status}`}>{statusLabel}</span>
      </div>
      <p className="manage-card-detail">
        Table for {reservation.partySize} at {formatTime12h(reservation.time)} on{' '}
        {formatDateLabel(reservation.date)}
      </p>
      <p className="manage-card-name">{reservation.name}</p>

      {reservation.status === 'confirmed' && !confirming && (
        <button className="btn btn-outline btn-sm" onClick={() => setConfirming(true)}>
          Cancel This Reservation
        </button>
      )}

      {reservation.status === 'confirmed' && confirming && (
        <div className="manage-cancel-confirm">
          <p>Cancel this reservation? This can&rsquo;t be undone.</p>
          {cancelState === 'error' && (
            <p className="manage-note-error">Something went wrong — please try again.</p>
          )}
          <div className="manage-cancel-actions">
            <button className="btn btn-primary btn-sm" onClick={doCancel} disabled={cancelState === 'cancelling'}>
              {cancelState === 'cancelling' ? 'Cancelling…' : 'Yes, Cancel It'}
            </button>
            <button className="btn btn-outline btn-sm" onClick={() => setConfirming(false)}>
              Never Mind
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ManageReservation() {
  const [mode, setMode] = useState('confirmation'); // 'confirmation' | 'namePhone'
  const [confirmationInput, setConfirmationInput] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const [searchStatus, setSearchStatus] = useState('idle'); // idle | loading | notFound | error
  const [results, setResults] = useState([]);

  async function handleConfirmationSearch(e) {
    e.preventDefault();
    const code = confirmationInput.trim().toUpperCase();
    if (!code) return;

    setSearchStatus('loading');
    try {
      const reservation = await getReservationByConfirmation(code);
      if (!reservation) {
        setResults([]);
        setSearchStatus('notFound');
      } else {
        setResults([reservation]);
        setSearchStatus('idle');
      }
    } catch (err) {
      console.error('Lookup failed:', err);
      setSearchStatus('error');
    }
  }

  async function handleNamePhoneSearch(e) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSearchStatus('loading');
    try {
      const reservations = await getReservationsByNamePhone(name, phone);
      setResults(reservations);
      setSearchStatus(reservations.length ? 'idle' : 'notFound');
    } catch (err) {
      console.error('Lookup failed:', err);
      setSearchStatus('error');
    }
  }

  function handleCancelled(confirmationNumber) {
    setResults((prev) =>
      prev.map((r) => (r.confirmationNumber === confirmationNumber ? { ...r, status: 'cancelled' } : r))
    );
  }

  function switchMode(next) {
    setMode(next);
    setResults([]);
    setSearchStatus('idle');
  }

  return (
    <div className="brand-supper-club">
      <PageHero
        eyebrow="Marge's Supper Club"
        title="Manage My Reservation"
        subtitle="Look yourself up to view or cancel a reservation."
        image={images.supperDinnerTable}
      />

      <section className="section">
        <div className="container manage-container">
          <div className="manage-tabs">
            <button
              className={`manage-tab ${mode === 'confirmation' ? 'is-active' : ''}`}
              onClick={() => switchMode('confirmation')}
            >
              By Confirmation Number
            </button>
            <button
              className={`manage-tab ${mode === 'namePhone' ? 'is-active' : ''}`}
              onClick={() => switchMode('namePhone')}
            >
              By Name &amp; Phone
            </button>
          </div>

          {mode === 'confirmation' && (
            <form className="manage-form" onSubmit={handleConfirmationSearch}>
              <label className="manage-field">
                <span>Confirmation number</span>
                <input
                  type="text"
                  value={confirmationInput}
                  onChange={(e) => setConfirmationInput(e.target.value)}
                  placeholder="e.g. 7RKMPX"
                  maxLength={12}
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Look Up Reservation
              </button>
            </form>
          )}

          {mode === 'namePhone' && (
            <form className="manage-form" onSubmit={handleNamePhoneSearch}>
              <label className="manage-field">
                <span>Last name</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
              <label className="manage-field">
                <span>Last 4 digits of phone</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 4821"
                  maxLength={4}
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Look Up Reservation
              </button>
            </form>
          )}

          {searchStatus === 'loading' && <p className="manage-note">Looking that up&hellip;</p>}
          {searchStatus === 'notFound' && (
            <p className="manage-note">
              We couldn&rsquo;t find a reservation that matches. Double-check what you entered, or{' '}
              <Link to="/reservations">book a new table</Link>.
            </p>
          )}
          {searchStatus === 'error' && (
            <p className="manage-note manage-note-error">
              Something went wrong looking that up. Please try again in a moment.
            </p>
          )}

          {results.length > 0 && (
            <div className="manage-results">
              {results.map((r) => (
                <ReservationCard key={r.confirmationNumber} reservation={r} onCancelled={handleCancelled} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
