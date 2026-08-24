import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { initAnalytics, trackPageview } from './lib/analytics';

import Home from './pages/Home';
import EatAndDrink from './pages/EatAndDrink';
import FargoExperience from './pages/FargoExperience';
import OttertailExperience from './pages/OttertailExperience';
import DinerFargo from './pages/DinerFargo';
import Bar from './pages/Bar';
import SupperClub from './pages/SupperClub';
import LuckyLounge from './pages/LuckyLounge';
import DinerOttertail from './pages/DinerOttertail';
import Shakers from './pages/Shakers';
import ShakerMuseum from './pages/ShakerMuseum';
import HelpSolveShaker from './pages/HelpSolveShaker';
import Story from './pages/Story';
import Photos from './pages/Photos';
import Gallery from './pages/Gallery';
import FindYourMarges from './pages/FindYourMarges';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import NotFound from './pages/NotFound';

// Lazy-loaded so the Firebase SDK (used only by the reservations flow)
// doesn't get pulled into every page's bundle — only visitors who reach
// these routes download it.
const Reservations = lazy(() => import('./pages/Reservations'));
const ManageReservation = lazy(() => import('./pages/ManageReservation'));

// Loads gtag.js once, then fires a page_view event on every client-side
// route change (a plain gtag.js snippet only ever sees the very first
// page load in a single-page app like this one, so route changes need to
// be tracked manually).
function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <>
      <AnalyticsListener />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/eat-and-drink" element={<EatAndDrink />} />

          <Route path="/fargo" element={<FargoExperience />} />
          <Route path="/fargo/diner" element={<DinerFargo />} />
          <Route path="/fargo/bar" element={<Bar />} />
          <Route path="/fargo/supper-club" element={<SupperClub />} />
          <Route path="/fargo/supper-club/lucky-lounge" element={<LuckyLounge />} />

          <Route path="/ottertail" element={<OttertailExperience />} />
          <Route path="/ottertail/diner" element={<DinerOttertail />} />

          <Route path="/the-shakers" element={<Shakers />} />
          <Route path="/the-shakers/museum" element={<ShakerMuseum />} />
          <Route path="/the-shakers/help-us-solve-this-shaker" element={<HelpSolveShaker />} />

          <Route path="/the-marges-story" element={<Story />} />

          <Route path="/photos" element={<Photos />} />
          <Route path="/photos/:slug" element={<Gallery />} />

          <Route path="/find-your-marges" element={<FindYourMarges />} />

          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/accessibility" element={<Accessibility />} />

          <Route
            path="/reservations"
            element={
              <Suspense fallback={<div className="section container"><p className="eyebrow">Loading&hellip;</p></div>}>
                <Reservations />
              </Suspense>
            }
          />
          <Route
            path="/reservations/manage"
            element={
              <Suspense fallback={<div className="section container"><p className="eyebrow">Loading&hellip;</p></div>}>
                <ManageReservation />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
