import './StaticPage.css';

export default function Privacy() {
  return (
    <div className="brand-umbrella">
      <header className="static-page-header">
        <div className="container">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="static-page-meta">Last updated: August 24, 2026</p>
        </div>
      </header>

      <section className="section">
        <div className="container static-page-body">
          <p>
            This policy explains what information World of Marge&rsquo;s (&ldquo;we,&rdquo;
            &ldquo;us&rdquo;) collects through this website, worldofmarge.com, and how we use it. World
            of Marge&rsquo;s is operated by Great Plains Hospitality.
          </p>

          <h2>Information We Collect</h2>
          <p>
            <strong>Reservations.</strong> When you book a table through our online reservation system,
            we collect the name, phone number, party size, and any notes you provide, and an email
            address if you choose to give one. This information is stored so our staff can seat your
            reservation and so you can look it up later to view or cancel it. You do not need to create
            an account or sign in to book — we don&rsquo;t have visitor accounts or passwords on this
            site.
          </p>
          <p>
            <strong>Automatic / analytics information.</strong> Like most websites, we use an analytics
            service (Google Analytics) to understand how visitors use our site — which pages are viewed,
            how visitors arrived, general device and location information (such as city or region, not
            precise location), and similar usage patterns. This helps us understand what&rsquo;s useful
            to visitors and improve the site. Analytics services like this typically use cookies or
            similar technology; see &ldquo;Cookies&rdquo; below.
          </p>
          <p>
            <strong>Information you submit directly.</strong> If a page on this site includes a form,
            any information you type into it is collected for that form&rsquo;s stated purpose only.
          </p>

          <h2>How We Use Information</h2>
          <ul>
            <li>To hold and manage your reservation, including letting you look it up to cancel it.</li>
            <li>To understand how the website is used, so we can improve it.</li>
            <li>To respond to inquiries you send us directly.</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not use your reservation information for
            marketing without your separate consent.
          </p>

          <h2>Confirmation Emails</h2>
          <p>
            To keep things simple, we currently do not send an automatic confirmation email or text after
            you book. Your confirmation number is shown on screen when you book — please save it or take
            a screenshot, since it&rsquo;s the easiest way to look up or cancel your reservation later.
          </p>

          <h2>Cookies</h2>
          <p>
            This site uses cookies set by our analytics provider (Google Analytics) to distinguish
            visitors and measure site usage. These cookies do not, by themselves, identify you by name.
            You can block or delete cookies through your browser settings; doing so may limit some site
            functionality but will not prevent you from booking a reservation.
          </p>

          <h2>Who We Share Information With</h2>
          <p>
            We use third-party service providers to help run this site, including Google (Firebase, for
            storing reservation data, and Google Analytics, for site usage data). These providers process
            information on our behalf and are not permitted to use it for their own purposes. We do not
            otherwise share your personal information with third parties, except where required by law.
          </p>

          <h2>Data Retention</h2>
          <p>
            We keep reservation records for as long as reasonably needed for restaurant operations and
            record-keeping, after which they are periodically removed. Analytics data is retained
            according to Google Analytics&rsquo; standard retention settings.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can ask us what information we have on file tied to a reservation, or ask us to delete
            it, by contacting us using the information below. If you&rsquo;d like your reservation
            cancelled, you can also do that yourself using the confirmation number from your booking.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            This website is not directed at children, and we do not knowingly collect personal
            information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time as the site changes. We&rsquo;ll update the date
            at the top of this page when we do.
          </p>

          <h2>Contact Us</h2>
          <p>
            Questions about this policy or your information? Reach us at{' '}
            <a href="mailto:damien@worldofmarge.com">damien@worldofmarge.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
