import { useState } from 'react';
import CategoryTile from '../components/CategoryTile';
import ReceiptCard from '../components/ReceiptCard';
import SearchBox from '../components/SearchBox';
import { categories, matchesQuery, receipts } from '../data/mockData';

/** "Mínar kvittanir" / "Skoða safn": all receipts with search and categories */
export default function Receipts() {
  const [query, setQuery] = useState('');
  const results = receipts.filter((r) => matchesQuery(r, query));

  return (
    <div className="page">
      <h1 className="page-title">Mínar kvittanir</h1>

      <SearchBox value={query} onChange={setQuery} placeholder="Leita að vöru eða verslun" />

      <div className="grid-3">
        {categories.map((c) => (
          <CategoryTile key={c.id} to={`/categories/${c.id}`} label={c.name} />
        ))}
      </div>

      <div className="receipt-list">
        {results.map((r) => (
          <ReceiptCard key={r.id} receipt={r} />
        ))}
      </div>
      {results.length === 0 && <p className="page-subtitle">Engar kvittanir fundust.</p>}
    </div>
  );
}
