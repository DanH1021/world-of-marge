import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Lightbox from '../components/Lightbox';
import { galleries } from '../data/galleries';

export default function Gallery() {
  const { slug } = useParams();
  const gallery = galleries[slug];
  const [index, setIndex] = useState(null);

  if (!gallery) return <Navigate to="/photos" replace />;

  const { concept, photos } = gallery;

  return (
    <>
      <PageHero
        eyebrow={concept.place}
        title={concept.name}
        subtitle="Take a look around."
        image={photos[0].src}
        size="short"
      />

      <section className="section">
        <div className="container">
          <div className="masonry">
            {photos.map((photo, i) => (
              <figure key={photo.src + i}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  style={{ all: 'unset', cursor: 'pointer', display: 'block' }}
                >
                  <img src={photo.src} alt={photo.caption || ''} loading="lazy" />
                </button>
                {photo.caption && <figcaption>{photo.caption}</figcaption>}
              </figure>
            ))}
          </div>
          <p style={{ marginTop: 32 }}>
            <Link to={concept.path} className="btn btn-outline">Visit {concept.name}</Link>
          </p>
        </div>
      </section>

      {index !== null && (
        <Lightbox
          photo={photos[index]}
          onClose={() => setIndex(null)}
          onPrev={() => setIndex((i) => (i - 1 + photos.length) % photos.length)}
          onNext={() => setIndex((i) => (i + 1) % photos.length)}
        />
      )}
    </>
  );
}
