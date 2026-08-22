import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { images } from '../data/placeholderImages';
import { shakers } from '../data/shakers';
import './HelpSolveShaker.css';

const unidentified = shakers.filter((s) => s.category === 'Unknown' || s.category === 'Weird Stuff');

export default function HelpSolveShaker() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Phase 2: wire this up to the Supabase backend / admin approval queue.
    setSubmitted(true);
  }

  return (
    <div className="brand-umbrella">
      <PageHero
        eyebrow="For Unidentified Pieces"
        title="Help Us Solve This Shaker"
        subtitle="Allow visitors and collectors to submit information about unidentified shakers."
        image={images.shakerCollection1}
        size="short"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="section-head">
              <p className="eyebrow">Still a mystery</p>
              <h2>Currently Unidentified</h2>
            </div>
            <div className="unidentified-grid">
              {unidentified.map((s) => (
                <div className="unidentified-card" key={s.id}>
                  <img src={s.image} alt={`${s.name}, an unidentified shaker`} />
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.funFact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="info-panel">
            {submitted ? (
              <div className="solve-success">
                <h3>Thank You!</h3>
                <p>
                  Your submission has been received and will be reviewed before it&rsquo;s added to the
                  collection. We really do appreciate it.
                </p>
                <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="solve-form">
                <h3>What Do You Know?</h3>
                <label>
                  Manufacturer (if known)
                  <input type="text" name="manufacturer" />
                </label>
                <label>
                  Approximate Year
                  <input type="text" name="year" />
                </label>
                <label>
                  Where Have You Seen It?
                  <input type="text" name="location" />
                </label>
                <label>
                  Additional Information
                  <textarea name="details" rows={4} />
                </label>
                <label>
                  Source / Link
                  <input type="url" name="source" placeholder="https://" />
                </label>
                <label>
                  Your Contact Information
                  <input type="email" name="contact" placeholder="you@example.com" required />
                </label>
                <button type="submit" className="btn btn-primary">Submit Information</button>
                <p className="solve-note">Submissions require administrative approval before becoming public.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <Link to="/the-shakers/museum" className="btn btn-outline">Back to the Digital Shaker Museum</Link>
        </div>
      </section>
    </div>
  );
}
