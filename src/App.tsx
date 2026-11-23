import { Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import Heim from './pages/Heim';
import SkannaKvittun from './pages/SkannaKvittun';
import YfirfaraOgVista from './pages/YfirfaraOgVista';
import MinarKvittanir from './pages/MinarKvittanir';
import SkodaKvittun from './pages/SkodaKvittun';
import Pappirsforskodun from './pages/Pappirsforskodun';
import SkodaFlokk from './pages/SkodaFlokk';
import Aminningar from './pages/Aminningar';
import MinarUpplysingar from './pages/MinarUpplysingar';

export default function App() {
  return (
    <Routes>
      {/* Skjáir með haus og navigation bar */}
      <Route element={<AppLayout />}>
        <Route index element={<Heim />} />
        <Route path="skanna" element={<SkannaKvittun />} />
        <Route path="skanna/yfirfara" element={<YfirfaraOgVista />} />
        <Route path="kvittanir" element={<MinarKvittanir />} />
        <Route path="kvittanir/:id" element={<SkodaKvittun />} />
        <Route path="flokkar/:id" element={<SkodaFlokk />} />
        <Route path="aminningar" element={<Aminningar />} />
        <Route path="eg" element={<MinarUpplysingar />} />
      </Route>

      {/* Heilskjár án navigation bar */}
      <Route path="kvittanir/:id/kvittun" element={<Pappirsforskodun />} />
    </Routes>
  );
}
