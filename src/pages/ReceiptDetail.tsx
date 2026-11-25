import { useParams } from 'react-router';
import { findCategory, findReceipt } from '../data/mockData';
import { formatDate, formatISK } from '../lib/format';
import { BackLink, Button, InfoRow } from '../components/ui';

/** "Skoða kvittun" */
export default function ReceiptDetail() {
  const { id } = useParams();
  const receipt = findReceipt(id);

  if (!receipt) {
    return (
      <div className="page">
        <p>Kvittun fannst ekki.</p>
        <Button to="/receipts" variant="secondary">
          Til baka í safnið
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <BackLink to="/receipts" title="Skoða kvittun" />

      <div className="split">
        <section className="info-card">
          <p className="info-card__title">
            {receipt.product} · {receipt.store}
          </p>
          <InfoRow label="Kaupdagur" value={formatDate(receipt.purchaseDate)} />
          <InfoRow label="Upphæð" value={formatISK(receipt.amount)} />
          <InfoRow
            label="Flokkur"
            value={findCategory(receipt.categoryId)?.name ?? 'Enginn'}
            mono={false}
          />
        </section>

        <section className="info-card">
          <p className="info-card__title">Skil og ábyrgð</p>
          <InfoRow label="Skilafrestur" value={formatDate(receipt.returnDeadline)} />
          <InfoRow label="Ábyrgð til" value={formatDate(receipt.warrantyUntil)} />
          <Button variant="secondary">Bæta við áminningu</Button>
        </section>
      </div>

      <div className="actions">
        <Button to={`/receipts/${receipt.id}/paper`} variant="secondary">
          Opna kvittun
        </Button>
        <Button>Breyta upplýsingum</Button>
      </div>
    </div>
  );
}
