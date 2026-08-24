import './StaticPage.css';

export default function Accessibility() {
  return (
    <div className="brand-umbrella">
      <header className="static-page-header">
        <div className="container">
          <p className="eyebrow">Accessibility</p>
          <h1>Accessibility Statement</h1>
          <p className="static-page-meta">Last updated: August 24, 2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container static-page-body">
          <p>
            World of Marge&rsquo;s is committed to making this website usable by as many people as
            possible, including guests who use assistive technology such as screen readers, voice
            control, or keyboard-only navigation.
          </p>

          <h2>Our Standard</h2>
          <p>
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. This is an
            ongoing effort — we review and improve the site over time rather than treating accessibility
            as a one-time checklist.
          </p>

          <h2>What We&rsquo;ve Built In</h2>
          <ul>
            <li>A &ldquo;skip to main content&rdquo; link for keyboard and screen reader users.</li>
            <li>Semantic page structure and heading levels, so the site reads sensibly out loud.</li>
            <li>Descriptive alt text on meaningful images.</li>
            <li>A navigation menu, including the mobile menu, that&rsquo;s fully operable by keyboard.</li>
            <li>Labels and status announcements on interactive elements like menus and forms.</li>
            <li>Color choices checked for reasonable contrast against their backgrounds.</li>
          </ul>

          <h2>Known Limitations</h2>
          <p>
            No website is perfect, and this one is no exception. If you run into an image without proper
            alt text, a control that&rsquo;s hard to reach by keyboard, or anything else that gets in your
            way, we want to know about it so we can fix it.
          </p>

          <h2>Feedback</h2>
          <p>
            If you experience any difficulty accessing any part of this website, please contact us at{' '}
            <a href="mailto:hello@worldofmarge.com">hello@worldofmarge.com</a>. Please let us know what
            page you were on and what happened — it helps us track down and fix the issue faster.
          </p>
        </div>
      </section>
    </div>
  );
}
