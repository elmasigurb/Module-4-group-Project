import { Link } from 'react-router';
import Button from '../components/Button';
import CategoryTile from '../components/CategoryTile';
import ReceiptCard from '../components/ReceiptCard';
import { kvittanir } from '../data/mockData';

export default function Heim() {
  const nylegar = [...kvittanir].sort((a, b) => b.kaupdagur.localeCompare(a.kaupdagur)).slice(0, 3);

  return (
    <div className="page">
      <div>
        <h1 className="page-title">Kvittanirnar þínar</h1>
        <p className="page-subtitle">Geymdu allar kvittanirnar á einum stað</p>
      </div>

      <div className="stack">
        <Button to="/skanna">Skanna kvittun</Button>
        <Button to="/kvittanir" variant="secondary">
          Skoða safn
        </Button>
      </div>

      <div className="grid-3">
        <CategoryTile to="/kvittanir" label="Kvittanir" icon="kvittun" />
        <CategoryTile to="/aminningar" label="Áminningar" icon="bjalla" />
        <CategoryTile to="/eg" label="Flokkar" icon="mappa" />
      </div>

      <div className="section-header">
        <h2 className="section-title">Nýlegar kvittanir</h2>
        <Link to="/kvittanir" className="link-muted">
          Sjá allt
        </Link>
      </div>

      <div className="stack">
        {nylegar.map((k) => (
          <ReceiptCard key={k.id} kvittun={k} />
        ))}
      </div>
    </div>
  );
}
