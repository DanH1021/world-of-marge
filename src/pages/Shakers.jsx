import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import RandomShakerWidget from '../components/RandomShakerWidget';
import { images } from '../data/placeholderImages';
import { shakerOfTheMonth } from '../data/shakers';
import './Shakers.css';

export default function Shakers() {
  return (
    <>
      <PageHero
        eyebrow="The Salt & Pepper Collection"
        title="Yes. Those Are All Salt & Pepper Shakers."
        image={images.shakerVintageShelf}
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            <p>And yes, there are a lot of them.</p>
            <p>
              For decades, salt &amp; pepper shakers were tiny pieces of everyday art &mdash; souvenirs,
              gifts, decorations and wonderfully unnecessary objects people collected simply because
              they made them smile.
            </p>
            <p>We happen to have a lot of them.</p>
            <p className="shaker-categories">Animals. People. Places. Food. Souvenirs. Ceramics. Oddities.</p>
            <p>And plenty of pairs that leave you wondering who decided the world needed them in the first place.</p>
            <p className="pull-quote">Individually, they&rsquo;re tiny curiosities. Together, they&rsquo;re pretty spectacular.</p>
          </div>
        </div>
      </section>

      <section className="section-tight shaker-random-section">
        <div className="container shaker-random-inner">
          <div>
            <p className="eyebrow">The Digital Shaker Museum</p>
            <h2>Show Me a Random Shaker</h2>
            <p>Each click randomly selects an item from the digital collection. Fair warning: it&rsquo;s a little addictive.</p>
            <Link to="/the-shakers/museum" className="btn btn-outline">Browse the Full Museum</Link>
          </div>
          <RandomShakerWidget />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shaker-month-card">
            <img src={shakerOfTheMonth.image} alt={shakerOfTheMonth.name} />
            <div className="shaker-month-body">
              <p className="eyebrow">Shaker of the Month</p>
              <h2>Because Apparently We Have Enough of Them to Do This.</h2>
              <h3>{shakerOfTheMonth.name}</h3>
              <p>{shakerOfTheMonth.funFact}</p>
              <p className="pull-quote">&ldquo;{shakerOfTheMonth.margeCommentary}&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="related-strip">
            <div>
              <p className="eyebrow on-dark">Recognize one of these?</p>
              <h3>Help Us Solve This Shaker</h3>
              <p>Some pieces in the collection are still unidentified. If you know one, we&rsquo;d love to hear about it.</p>
            </div>
            <Link to="/the-shakers/help-us-solve-this-shaker" className="btn btn-outline on-dark">Help Us Solve It</Link>
          </div>
        </div>
      </section>
    </>
  );
}
