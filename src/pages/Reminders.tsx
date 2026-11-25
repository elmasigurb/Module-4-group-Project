import { Link } from 'react-router';
import { findReceipt, reminders } from '../data/mockData';
import { formatDate } from '../lib/format';
import { Icon, InfoRow } from '../components/ui';

/** "Áminningar": upcoming return-deadline and warranty reminders */
export default function Reminders() {
  const sorted = [...reminders].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="page">
      <div>
        <h1 className="page-title">Áminningar</h1>
        <p className="page-subtitle">Næstu áminningar</p>
      </div>

      <div className="receipt-list">
        {sorted.map((reminder) => {
          const receipt = findReceipt(reminder.receiptId);
          if (!receipt) return null;
          const isReturn = reminder.type === 'return';
          return (
            <Link key={reminder.id} to={`/receipts/${receipt.id}`} className="info-card">
              <p className="info-card__title">
                {receipt.product} · {receipt.store}
                <Icon name="bell" size={16} />
              </p>
              <p className="page-subtitle">{isReturn ? 'Skilafrestur' : 'Ábyrgð'}</p>
              <InfoRow label="Áminning" value={formatDate(reminder.date)} />
              <InfoRow
                label={isReturn ? 'Skilafrestur' : 'Ábyrgð til'}
                value={formatDate(isReturn ? receipt.returnDeadline : receipt.warrantyUntil)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
