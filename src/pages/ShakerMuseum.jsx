import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import ShakerCard from '../components/ShakerCard';
import ShakerModal from '../components/ShakerModal';
import RandomShakerWidget from '../components/RandomShakerWidget';
import { images } from '../data/placeholderImages';
import { shakers, shakerCategories } from '../data/shakers';
import './ShakerMuseum.css';

export default function ShakerMuseum() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return shakers.filter((s) => {
      const matchesCategory = category === 'All' || s.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.manufacturer.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q) ||
        s.funFact.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        eyebrow="The Digital Shaker Museum"
        title="A Growing, Searchable Collection"
        subtitle="This is a sample of the collection. The real archive will grow as pieces get cataloged."
        image={images.shakerCollection2}
        size="short"
      />

      <section className="section-tight museum-toolbar">
        <div className="container museum-toolbar-inner">
          <label className="museum-search">
            <span className="visually-hidden">Search the shaker collection</span>
            <input
              type="search"
              placeholder="Search by name, maker, origin…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className="museum-filters" role="group" aria-label="Filter by category">
            <button
              type="button"
              className={`chip ${category === 'All' ? 'is-active' : ''}`}
              onClick={() => setCategory('All')}
            >
              All
            </button>
            {shakerCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chip ${category === cat ? 'is-active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p>No shakers match that search. Try another term, or browse a category.</p>
          ) : (
            <div className="museum-grid">
              {filtered.map((s) => (
                <ShakerCard key={s.id} shaker={s} onSelect={setSelected} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-tight museum-cta-section">
        <div className="container museum-cta-inner">
          <RandomShakerWidget />
          <div className="museum-cta-copy">
            <p className="eyebrow">Recognize something?</p>
            <h2>Help Us Solve This Shaker</h2>
            <p>Some pieces in the collection are still unidentified. Manufacturer, approximate year, where you&rsquo;ve seen it &mdash; anything helps.</p>
            <Link to="/the-shakers/help-us-solve-this-shaker" className="btn btn-primary">Submit What You Know</Link>
          </div>
        </div>
      </section>

      {selected && <ShakerModal shaker={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
