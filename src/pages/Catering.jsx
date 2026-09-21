import './StaticPage.css';
import './Catering.css';

const CATERING_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe-iiHfEMwTCBOuKlsuj-D3hXoZHHILjrmp-zi2gGTYCA7LAA/viewform';

const EVENT_TYPES = [
  'Corporate Events',
  'Weddings',
  'Private Parties',
  'Socials',
  'Baby Showers',
  'Galas & Fundraisers',
  'Product Launches',
  'Holiday Parties',
  'Grand Openings',
  'Rehearsal Dinners',
  'Block Parties',
  'Celebrations of Life',
  'Going-Away Parties',
  'Retirement Parties',
  'And More',
];

export default function Catering() {
  return (
    <div className="brand-umbrella">
      <header className="static-page-header">
        <div className="container">
          <p className="eyebrow">Catering</p>
          <h1>Bar Catering Services</h1>
          <p className="static-page-intro">
            Professional. Trusted. Fun. We bring a full bar &mdash; beer, wine, cocktails, and more &mdash;
            to your event, wherever it&rsquo;s happening. Licensed, insured, and staffed, so all you have
            to do is tell us about your event.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container static-page-body">
          <h2>Choose Your Bar</h2>
          <p>
            Every bar is built around one of three packages. Specific items and pricing for each package
            are sent by email after you submit an inquiry below.
          </p>
          <div className="catering-package-grid">
            <div className="catering-package-card catering-package-card--featured">
              <span className="catering-package-tag">Most Popular</span>
              <h3>Beer and Wine Bar</h3>
              <p>Perfect for smaller gatherings. Includes 4 choices of beer and 3 wine varietals.</p>
            </div>
            <div className="catering-package-card">
              <h3>Beer, Wine &amp; Batched Cocktails</h3>
              <p>
                Includes 4 choices of beer, 3 wine varietals, and as many options of batched cocktails as
                you&rsquo;d like.
              </p>
            </div>
            <div className="catering-package-card">
              <h3>Full Bar</h3>
              <p>
                Great for weddings, fundraisers, and other large events. Includes 4 choices of beer, 3
                wine varietals, and liquor and mixers.
              </p>
            </div>
          </div>

          <h2>Perfect For</h2>
          <p>We cater events of every size, including:</p>
          <div className="badge-row">
            {EVENT_TYPES.map((type) => (
              <span key={type} className="badge">
                {type}
              </span>
            ))}
          </div>

          <h2>Get a Quote</h2>
          <p>
            Fill out the inquiry form below with your event details. We&rsquo;ll follow up by email with
            our full bar catering menu, pricing, and next steps.
          </p>

          <div className="catering-form-section">
            <p className="catering-form-fallback">
              Form not loading?{' '}
              <a href={CATERING_FORM_URL} target="_blank" rel="noopener noreferrer">
                Open the inquiry form in a new tab
              </a>
              .
            </p>
            <div className="catering-form-embed">
              <iframe
                src={`${CATERING_FORM_URL}?embedded=true`}
                title="Bar Catering Inquiry Form"
                loading="lazy"
              >
                Loading&hellip;
              </iframe>
            </div>
          </div>

          <h2>Questions?</h2>
          <p>
            Reach out to Jenny at{' '}
            <a href="mailto:jenny@boilerroomfargo.com">jenny@boilerroomfargo.com</a> and we&rsquo;ll be
            happy to help.
          </p>
        </div>
      </section>
    </div>
  );
}
