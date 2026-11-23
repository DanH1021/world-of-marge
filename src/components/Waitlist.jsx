import { useEffect, useId, useRef, useState } from 'react';

const FORM_NAME = 'karaoke-brunch-waitlist';

/**
 * Sold-out waitlist. Submissions go to Netlify Forms (see public/__forms.html);
 * nothing is stored on this site. Netlify emails each sign-up to the team.
 */
export default function Waitlist({ eventName, maxTickets = 8 }) {
  const id = useId();
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [message, setMessage] = useState('');
  const ref = useRef(null);

  // Arriving from a "Join the waitlist" link: scroll here once it renders.
  useEffect(() => {
    if (window.location.hash === '#waitlist' && ref.current) {
      ref.current.scrollIntoView({ block: 'start' });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus('sending');
    setMessage('Adding you to the waitlist…');
    const body = new URLSearchParams(new FormData(form)).toString();
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('done');
      setMessage('You’re on the list! If tickets open up, we’ll reach out by email.');
    } catch {
      setStatus('error');
      setMessage('Sorry, that didn’t go through. Please try again in a minute.');
    }
  }

  return (
    <div className="waitlist" id="waitlist" ref={ref}>
      <h3 className="waitlist-title">Join the waitlist</h3>
      {status === 'done' ? null : (
        <p className="waitlist-intro">
          Leave your info and we&rsquo;ll reach out if tickets open up.
        </p>
      )}

      {status !== 'done' && (
        <form name={FORM_NAME} method="POST" onSubmit={handleSubmit} noValidate={false} className="waitlist-form">
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <input type="hidden" name="event" value={eventName} />
          <p className="waitlist-honeypot" aria-hidden="true">
            <label>
              Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>

          <label htmlFor={`${id}-name`}>Name</label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required />

          <label htmlFor={`${id}-email`}>Email</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required />

          <div className="waitlist-row">
            <div>
              <label htmlFor={`${id}-phone`}>
                Phone <span className="waitlist-optional">(optional)</span>
              </label>
              <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor={`${id}-tickets`}>Tickets</label>
              <select id={`${id}-tickets`} name="tickets" defaultValue="2">
                {Array.from({ length: maxTickets }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary ticket-btn ticket-btn-block" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
          </button>
          <p className="waitlist-fine">
            We&rsquo;ll only use this to contact you about tickets for this event.
          </p>
        </form>
      )}

      <p className={`waitlist-status is-${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
