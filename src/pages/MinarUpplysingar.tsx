import { useState } from 'react';
import Button from '../components/Button';
import CategoryTile from '../components/CategoryTile';
import Field from '../components/Field';
import { flokkar, notandi } from '../data/mockData';

export default function MinarUpplysingar() {
  // TODO (áfangi 4): sækja og vista með Supabase auth
  const [nafn, setNafn] = useState(notandi.nafn);
  const [netfang, setNetfang] = useState(notandi.netfang);

  return (
    <div className="page">
      <h1 className="page-title">Mínar upplýsingar</h1>

      <Field label="Nafn" placeholder="Nafnið þitt" value={nafn} onChange={(e) => setNafn(e.target.value)} />
      <Field
        label="Netfang"
        type="email"
        placeholder="Netfangið þitt"
        value={netfang}
        onChange={(e) => setNetfang(e.target.value)}
      />

      <h2 className="section-title">Mínir flokkar</h2>
      <Button variant="secondary">Breyta eða bæta við flokki</Button>
      <div className="grid-2">
        {flokkar.map((f) => (
          <CategoryTile key={f.id} to={`/flokkar/${f.id}`} label={f.nafn} />
        ))}
      </div>
    </div>
  );
}
