import { useState } from 'react';
import ReceiptCard from '../components/ReceiptCard';
import Icon from '../components/Icon';
import CategoryTile from '../components/CategoryTile';
import { flokkar, kvittanir } from '../data/mockData';

export default function MinarKvittanir() {
  const [leit, setLeit] = useState('');

  const q = leit.trim().toLowerCase();
  const nidurstodur = kvittanir.filter(
    (k) => !q || k.vara.toLowerCase().includes(q) || k.verslun.toLowerCase().includes(q),
  );

  return (
    <div className="page">
      <h1 className="page-title">Mínar kvittanir</h1>

      <label className="search-box">
        <Icon name="leit" size={16} />
        <input
          placeholder="Leita að vöru eða verslun"
          value={leit}
          onChange={(e) => setLeit(e.target.value)}
        />
      </label>

      <div className="grid-3">
        {flokkar.map((f) => (
          <CategoryTile key={f.id} to={`/flokkar/${f.id}`} label={f.nafn} />
        ))}
      </div>

      <div className="stack">
        {nidurstodur.map((k) => (
          <ReceiptCard key={k.id} kvittun={k} />
        ))}
        {nidurstodur.length === 0 && <p className="page-subtitle">Engar kvittanir fundust.</p>}
      </div>
    </div>
  );
}
