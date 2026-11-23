import { useEffect, useState } from 'react';
import { TICKETS_API, parseTicketFeed } from '../data/karaokeBrunch';

/**
 * Reads the public ticket-availability feed once on page load.
 * Returns { state: 'loading' | 'ready' | 'error', data }.
 * Gives up after 8 seconds so the page never waits on it.
 */
export default function useTicketFeed() {
  const [result, setResult] = useState({ state: 'loading', data: null });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);

    fetch(TICKETS_API, { signal: controller.signal, headers: { Accept: 'application/json' } })
      .then((res) => {
        if (!res.ok) throw new Error(`Ticket feed returned ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setResult({ state: 'ready', data: parseTicketFeed(json) });
      })
      .catch(() => {
        if (!cancelled) setResult({ state: 'error', data: null });
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return result;
}
