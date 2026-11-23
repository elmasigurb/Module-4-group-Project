import { Link } from 'react-router';
import type { Receipt } from '../types';
import { formatDate, formatISK } from '../lib/format';
import Icon from './Icon';

export default function ReceiptCard({ receipt }: { receipt: Receipt }) {
  return (
    <Link to={`/receipts/${receipt.id}`} className="receipt-card">
      <div className="receipt-card__thumb" aria-hidden="true">
        <Icon name="receipt" size={16} />
      </div>
      <div className="receipt-card__body">
        <p className="receipt-card__title">
          {receipt.product} · {receipt.store}
        </p>
        <p className="receipt-card__date mono">{formatDate(receipt.purchaseDate)}</p>
      </div>
      <div className="receipt-card__right">
        <Icon name="forward" size={14} />
        <span className="mono">{formatISK(receipt.amount)}</span>
      </div>
    </Link>
  );
}
