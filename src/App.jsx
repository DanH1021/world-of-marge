import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

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
import NotFound from './pages/NotFound';

export default function App() {
  return (
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

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
