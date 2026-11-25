import { Link } from 'react-router';
import { receipts } from '../data/mockData';
import { Button, CategoryTile, ReceiptCard } from '../components/ui';

export default function Home() {
  const recent = [...receipts]
    .sort((a, b) => b.purchaseDate.localeCompare(a.purchaseDate))
    .slice(0, 6);

  return (
    <div className="page">
      <div>
        <h1 className="page-title">Kvittanirnar þínar</h1>
        <p className="page-subtitle">Geymdu allar kvittanirnar á einum stað</p>
      </div>

      <div className="actions">
        <Button to="/scan">Skanna kvittun</Button>
        <Button to="/receipts" variant="secondary">
          Skoða safn
        </Button>
      </div>

      <div className="grid-3">
        <CategoryTile to="/receipts" label="Kvittanir" icon="receipt" />
        <CategoryTile to="/reminders" label="Áminningar" icon="bell" />
        <CategoryTile to="/profile" label="Flokkar" icon="folder" />
      </div>

      <div className="section-header">
        <h2 className="section-title">Nýlegar kvittanir</h2>
        <Link to="/receipts" className="link-muted">
          Sjá allt
        </Link>
      </div>

      <div className="receipt-list">
        {recent.map((r) => (
          <ReceiptCard key={r.id} receipt={r} />
        ))}
      </div>
    </div>
  );
}
