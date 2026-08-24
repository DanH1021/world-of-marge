import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import {
  MAX_PARTY_SIZE,
  computeAvailableTimes,
  formatDateLabel,
  formatTime12h,
  getBookableDates,
} from '../data/reservationConfig';
import { bookReservation, fetchOccupiedKeys } from '../lib/firebaseReservations';
import './Reservations.css';

const PARTY_SIZE_OPTIONS = Array.from({ length: MAX_PARTY_SIZE }, (_, i) => i + 1);

function emptyContact() {
  return { name: '', phone: '', email: '', notes: '' };
}

export default function Reservations() {
  const bookableDates = useMemo(() => getBookableDates(), []);

  const [partySize, setPartySize] = useState('');
  const [largeParty, setLargeParty] = useState(false);
  const [dateKey, setDateKey] = useState('');

  const [timesStatus, setTimesStatus] = useState('idle'); // idle | loading | ready | error
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null); // { time, tableId }

  const [contact, setContact] = useState(emptyContact());
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle | submitting | conflict | error
  const [confirmation, setConfirmation] = useState(null);

  const readyForTimes = dateKey && partySize && !largeParty;

  useEffect(() => {
    if (!readyForTimes) {
      setTimes([]);
      setTimesStatus('idle');
      setSelectedTime(null);
      return;
    }

    let cancelled = false;
    setTimesStatus('loading');
    setSelectedTime(null);

    fetchOccupiedKeys(dateKey)
      .then((occupied) => {
        if (cancelled) return;
        setTimes(computeAvailableTimes(Number(partySize), occupied));
        setTimesStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load availability:', err);
        setTimesStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [dateKey, partySize, readyForTimes]);

  function handlePartySizeChange(value) {
    if (value === '11+') {
      setLargeParty(true);
      setPartySize('');
    } else {
      setLargeParty(false);
      setPartySize(value);
    }
  }

  function validateContact() {
    const errors = {};
    const digits = contact.phone.replace(/\D/g, '');
    if (!contact.name.trim()) errors.name = 'Name is required.';
    else if (contact.name.trim().length > 80) errors.name = 'Name is too long.';
    if (!contact.phone.trim()) errors.phone = 'Phone number is required.';
    else if (digits.length < 4) errors.phone = 'Enter at least the last 4 digits of a real phone number.';
    else if (contact.phone.length > 30) errors.phone = 'Phone number is too long.';
    if (contact.email && contact.email.length > 120) errors.email = 'Email is too long.';
    if (contact.notes.length > 500) errors.notes = 'Notes are limited to 500 characters.';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedTime || !validateContact()) return;

    setSubmitStatus('submitting');
    try {
      const confirmationNumber = await bookReservation({
        date: dateKey,
        time: selectedTime.time,
        tableId: selectedTime.tableId,
        partySize: Number(partySize),
        name: contact.name.trim(),
        phone: contact.phone.trim(),
        email: contact.email.trim(),
        notes: contact.notes.trim(),
      });
      setConfirmation({
        confirmationNumber,
        dateKey,
        time: selectedTime.time,
        partySize: Number(partySize),
      });
      setSubmitStatus('idle');
    } catch (err) {
      console.error('Booking failed:', err);
      setSubmitStatus('conflict');
      setSelectedTime(null);
      // Someone else may have just taken this slot — refresh the time list.
      try {
        const occupied = await fetchOccupiedKeys(dateKey);
        setTimes(computeAvailableTimes(Number(partySize), occupied));
      } catch {
        // If the refresh itself fails, the time list just stays stale; the
        // conflict banner below still tells the guest what happened.
      }
    }
  }

  function startOver() {
    setPartySize('');
    setLargeParty(false);
    setDateKey('');
    setTimes([]);
    setTimesStatus('idle');
    setSelectedTime(null);
    setContact(emptyContact());
    setFieldErrors({});
    setSubmitStatus('idle');
    setConfirmation(null);
  }

  if (confirmation) {
    return (
      <div className="brand-supper-club">
        <PageHero
          eyebrow="Marge's Supper Club"
          title="You're Booked"
          subtitle="Save this number — we mean it."
          image={images.supperDinnerTable}
        />
        <section className="section">
          <div className="container res-confirm-container">
            <div className="res-confirm-card">
              <p className="eyebrow">Confirmation Number</p>
              <p className="res-confirm-number">{confirmation.confirmationNumber}</p>
              <p className="res-confirm-detail">
                A table for {confirmation.partySize} at {formatTime12h(confirmation.time)} on{' '}
                {formatDateLabel(confirmation.dateKey)}.
              </p>
              <p className="res-confirm-warning">
                We will <strong>not</strong> be emailing you a confirmation. Please take a screenshot or
                write down your confirmation number — you&rsquo;ll need it to look up or cancel this
                reservation later.
              </p>
              <div className="res-confirm-actions">
                <Link to="/reservations/manage" className="btn btn-outline">
                  Manage My Reservation
                </Link>
                <button className="btn btn-primary" onClick={startOver}>
                  Book Another Table
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="brand-supper-club">
      <PageHero
        eyebrow="Marge's Supper Club"
        title="Reserve a Table"
        subtitle="Thursday, Friday, and Saturday evenings. Booked online, no phone call needed."
        image={images.supperDinnerTable}
      />

      <section className="section">
        <div className="container res-container">
          <p className="res-manage-link">
            Already have a reservation? <Link to="/reservations/manage">Manage it here</Link>.
          </p>

          <div className="res-step">
            <p className="eyebrow">Step 1</p>
            <h2>Party Size &amp; Date</h2>

            <div className="res-field-row">
              <label className="res-field">
                <span>Party size</span>
                <select
                  value={largeParty ? '11+' : partySize}
                  onChange={(e) => handlePartySizeChange(e.target.value)}
                >
                  <option value="" disabled>
                    Select&hellip;
                  </option>
                  {PARTY_SIZE_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                  <option value="11+">11+ guests</option>
                </select>
              </label>

              <label className="res-field">
                <span>Date</span>
                <select value={dateKey} onChange={(e) => setDateKey(e.target.value)} disabled={largeParty}>
                  <option value="" disabled>
                    Select&hellip;
                  </option>
                  {bookableDates.map((dk) => (
                    <option key={dk} value={dk}>
                      {formatDateLabel(dk)}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {largeParty && (
              <p className="res-note res-note-call">
                For parties of 11 or more, please call the Supper Club directly — we&rsquo;ll seat a group
                that size across multiple tables and want to talk through timing with you.
              </p>
            )}
          </div>

          {readyForTimes && (
            <div className="res-step">
              <p className="eyebrow">Step 2</p>
              <h2>Pick a Time</h2>

              {timesStatus === 'loading' && <p className="res-note">Checking availability&hellip;</p>}
              {timesStatus === 'error' && (
                <p className="res-note res-note-error">
                  We couldn&rsquo;t load availability just now. Please try again in a moment.
                </p>
              )}
              {timesStatus === 'ready' && times.length === 0 && (
                <p className="res-note">
                  No tables are available for that party size on {formatDateLabel(dateKey)}. Try another
                  date above.
                </p>
              )}
              {timesStatus === 'ready' && times.length > 0 && (
                <div className="res-time-grid">
                  {times.map((t) => (
                    <button
                      key={t.time}
                      type="button"
                      className={`res-option ${selectedTime?.time === t.time ? 'is-selected' : ''}`}
                      onClick={() => setSelectedTime(t)}
                    >
                      {formatTime12h(t.time)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {selectedTime && (
            <div className="res-step">
              <p className="eyebrow">Step 3</p>
              <h2>Your Info</h2>

              {submitStatus === 'conflict' && (
                <p className="res-note res-note-error">
                  Sorry — that time was just booked by someone else. Please pick another time above.
                </p>
              )}

              <form className="res-form" onSubmit={handleSubmit} noValidate>
                <label className="res-field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={contact.name}
                    maxLength={80}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                  />
                  {fieldErrors.name && <span className="res-field-error">{fieldErrors.name}</span>}
                </label>

                <label className="res-field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={contact.phone}
                    maxLength={30}
                    onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                  />
                  {fieldErrors.phone && <span className="res-field-error">{fieldErrors.phone}</span>}
                </label>

                <label className="res-field">
                  <span>Email (optional)</span>
                  <input
                    type="email"
                    value={contact.email}
                    maxLength={120}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  />
                  {fieldErrors.email && <span className="res-field-error">{fieldErrors.email}</span>}
                </label>

                <label className="res-field res-field-wide">
                  <span>Notes (optional)</span>
                  <textarea
                    value={contact.notes}
                    maxLength={500}
                    rows={3}
                    onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                  />
                  {fieldErrors.notes && <span className="res-field-error">{fieldErrors.notes}</span>}
                </label>

                <button className="btn btn-primary" type="submit" disabled={submitStatus === 'submitting'}>
                  {submitStatus === 'submitting' ? 'Booking…' : 'Confirm Reservation'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
