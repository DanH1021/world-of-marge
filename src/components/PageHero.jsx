import './PageHero.css';

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt, size = 'default', children }) {
  return (
    <section className={`page-hero page-hero-${size}`} aria-labelledby="page-hero-heading">
      <div className="page-hero-bg" aria-hidden={imageAlt ? undefined : 'true'}>
        <img src={image} alt={imageAlt || ''} />
        <div className="scrim" />
      </div>
      <div className="page-hero-content container">
        {eyebrow && <p className="eyebrow on-dark">{eyebrow}</p>}
        <h1 id="page-hero-heading">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
