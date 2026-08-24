// Lightweight Google Analytics 4 (gtag.js) integration.
//
// It's fine for this to live in client-side code: a GA Measurement ID isn't
// a secret, it's meant to be public (it's visible in any page's source once
// analytics is running).
export const GA_MEASUREMENT_ID = 'G-LS6YL3TZGB';

let initialized = false;

/**
 * Loads gtag.js and configures it for this site. Call once, as early as
 * possible (e.g. from the app's root component).
 */
export function initAnalytics() {
  if (initialized) return;
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    // No real Measurement ID configured yet — skip loading anything so we
    // don't send test traffic to a placeholder property.
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  // send_page_view is disabled here because this is a single-page app —
  // we send page_view events ourselves on each route change instead (see
  // trackPageview below), otherwise every route would only ever register
  // as the initial page load.
  gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

  initialized = true;
}

/**
 * Records a page_view event for the given path. Call this on every route
 * change (see AnalyticsListener in App.jsx).
 */
export function trackPageview(path) {
  if (!initialized || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
