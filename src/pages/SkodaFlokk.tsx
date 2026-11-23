import { useState } from 'react';
import { Link, useParams } from 'react-router';
import Icon from '../components/Icon';
import ReceiptCard from '../components/ReceiptCard';
import { finnaFlokk, kvittanir } from '../data/mockData';

export default function SkodaFlokk() {
  const { id } = useParams();
  const flokkur = finnaFlokk(id);
  const [leit, setLeit] = useState('');

  const q = leit.trim().toLowerCase();
  const iFlokki = kvittanir
    .filter((k) => k.flokkurId === id)
    .filter((k) => !q || k.vara.toLowerCase().includes(q) || k.verslun.toLowerCase().includes(q));

  return (
    <div className="page">
      <Link to="/kvittanir" className="back-link">
        <Icon name="til-baka" size={16} /> {flokkur?.nafn ?? 'Flokkur'}
      </Link>

      <label className="search-box">
        <Icon name="leit" size={16} />
        <input
          placeholder="Leita í flokknum"
          value={leit}
          onChange={(e) => setLeit(e.target.value)}
        />
      </label>

      <div className="stack">
        {iFlokki.map((k) => (
          <ReceiptCard key={k.id} kvittun={k} />
        ))}
        {iFlokki.length === 0 && <p className="page-subtitle">Engar kvittanir í þessum flokki.</p>}
      </div>
    </div>
  );
}
