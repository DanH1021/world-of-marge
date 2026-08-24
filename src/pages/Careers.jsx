import './StaticPage.css';

export default function Careers() {
  return (
    <div className="brand-umbrella">
      <header className="static-page-header">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h1>Come Work With Us</h1>
          <p className="static-page-intro">
            World of Marge&rsquo;s is a handful of different places — a diner, a bar, a supper club, a
            hidden lounge — that all run on the same idea: take care of people, and have a good time
            doing it. If that sounds like your kind of job, we&rsquo;d love to hear from you.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container static-page-body">
          <h2>What We Look For</h2>
          <p>
            We hire for attitude first and experience second. The people who do well here are the ones
            who genuinely like taking care of guests, work well with a team during a busy Friday rush,
            and don&rsquo;t need to be asked twice to help out somewhere outside their own station.
            Restaurant experience helps, but it isn&rsquo;t the whole story.
          </p>

          <h2>Where We&rsquo;re Hiring</h2>
          <p>We&rsquo;re always open to hearing from good people across every concept, including:</p>
          <div className="static-page-roles">
            <div className="static-page-role-card">
              <h3>Marge&rsquo;s Diner</h3>
              <p>Fargo &amp; Ottertail — kitchen, servers, counter</p>
            </div>
            <div className="static-page-role-card">
              <h3>Marge&rsquo;s Bar</h3>
              <p>Bartenders, barbacks, servers</p>
            </div>
            <div className="static-page-role-card">
              <h3>Marge&rsquo;s Supper Club &amp; Lucky Lounge</h3>
              <p>Kitchen, servers, bartenders, hosts</p>
            </div>
            <div className="static-page-role-card">
              <h3>Management</h3>
              <p>Shift leads and management, across locations</p>
            </div>
          </div>
          <p>
            We don&rsquo;t always have every position open at every location, but we keep this list of
            interest on file and reach out when something opens up that fits.
          </p>

          <h2>How to Apply</h2>
          <p>
            Send your resume — and which location and role you&rsquo;re interested in — to{' '}
            <a href="mailto:damien@worldofmarge.com">damien@worldofmarge.com</a>. We read every
            application and will get back to you if it looks like a good fit.
          </p>
        </div>
      </section>
    </div>
  );
}
