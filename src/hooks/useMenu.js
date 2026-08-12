import { useEffect, useState } from 'react';
import { fetchMenu } from '../lib/firestoreMenu';

export function useMenu(sourceKey) {
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');

    fetchMenu(sourceKey)
      .then((result) => {
        if (cancelled) return;
        setCategories(result);
        setStatus('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        console.error(`useMenu(${sourceKey}) failed:`, err);
        setError(err);
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [sourceKey]);

  return { status, categories, error };
}
