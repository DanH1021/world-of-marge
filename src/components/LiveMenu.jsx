import { useMenu } from '../hooks/useMenu';
import { menuSources } from '../data/menuSources';
import './LiveMenu.css';

function formatPrice(price) {
  if (price === undefined || price === null) return null;
  const trimmed = String(price).trim();
  if (!trimmed) return null; // Empty price -> omit entirely, per house decision.
  return trimmed.startsWith('$') ? trimmed : `$${trimmed}`;
}

export default function LiveMenu({ sourceKey }) {
  const { status, categories, error } = useMenu(sourceKey);
  const source = menuSources[sourceKey];

  if (status === 'loading') {
    return (
      <div className="live-menu-state">
        <p className="eyebrow">Loading tonight&rsquo;s menu&hellip;</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="live-menu-state">
        <p>
          We couldn&rsquo;t load the live menu right now.{' '}
          {source?.label ? `Please check back shortly, or give ${source.label} a call.` : 'Please check back shortly.'}
        </p>
        {import.meta.env.DEV && error && <p className="live-menu-debug">{String(error.message || error)}</p>}
      </div>
    );
  }

  if (!categories.length) {
    return (
      <div className="live-menu-state">
        <p>The menu is being updated. Check back shortly.</p>
      </div>
    );
  }

  return (
    <div className="live-menu">
      {categories.map((cat) => (
        <div className="live-menu-category" key={cat.name}>
          <div className="live-menu-category-head">
            <h3>{cat.name}</h3>
            {cat.note && <p className="live-menu-note">{cat.note}</p>}
          </div>
          <ul className="live-menu-items">
            {cat.items.map((item) => {
              const price = formatPrice(item.price);
              return (
                <li key={item.id} className="live-menu-item">
                  <div className="live-menu-item-head">
                    <span className="live-menu-item-name">{item.name}</span>
                    <span className="live-menu-item-rule" aria-hidden="true" />
                    {price && <span className="live-menu-item-price">{price}</span>}
                  </div>
                  {item.description && <p className="live-menu-item-desc">{item.description}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
