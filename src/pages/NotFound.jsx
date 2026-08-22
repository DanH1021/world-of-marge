import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section brand-umbrella" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>We Couldn&rsquo;t Find That Corner of the World of Marge&rsquo;s</h1>
        <p>Maybe it moved. Maybe it never existed. Either way, let&rsquo;s get you back on track.</p>
        <Link to="/" className="btn btn-primary">Back to the World</Link>
      </div>
    </section>
  );
}
