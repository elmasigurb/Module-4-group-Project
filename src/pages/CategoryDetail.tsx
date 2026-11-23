import { useState } from 'react';
import { useParams } from 'react-router';
import BackLink from '../components/BackLink';
import ReceiptCard from '../components/ReceiptCard';
import SearchBox from '../components/SearchBox';
import { findCategory, matchesQuery, receipts } from '../data/mockData';

/** "Skoða flokk": receipts in one category */
export default function CategoryDetail() {
  const { id } = useParams();
  const category = findCategory(id);
  const [query, setQuery] = useState('');

  const results = receipts.filter((r) => r.categoryId === id && matchesQuery(r, query));

  return (
    <div className="page">
      <BackLink to="/receipts" title={category?.name ?? 'Flokkur'} />

      <SearchBox value={query} onChange={setQuery} placeholder="Leita í flokknum" />

      <div className="receipt-list">
        {results.map((r) => (
          <ReceiptCard key={r.id} receipt={r} />
        ))}
      </div>
      {results.length === 0 && <p className="page-subtitle">Engar kvittanir í þessum flokki.</p>}
    </div>
  );
}
