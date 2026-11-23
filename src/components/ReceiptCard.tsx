import { Link } from 'react-router';
import type { Kvittun } from '../types';
import { dagsetning, kronur } from '../lib/format';
import Icon from './Icon';

export default function ReceiptCard({ kvittun }: { kvittun: Kvittun }) {
  return (
    <Link to={`/kvittanir/${kvittun.id}`} className="receipt-card">
      <div className="receipt-card__thumb" aria-hidden="true">
        <Icon name="kvittun" size={16} />
      </div>
      <div className="receipt-card__body">
        <p className="receipt-card__title">
          {kvittun.vara} · {kvittun.verslun}
        </p>
        <p className="receipt-card__date mono">{dagsetning(kvittun.kaupdagur)}</p>
      </div>
      <div className="receipt-card__right">
        <Icon name="afram" size={14} />
        <span className="mono">{kronur(kvittun.upphaed)}</span>
      </div>
    </Link>
  );
}
