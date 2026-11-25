import { Link } from 'react-router';
import type { Receipt, Reminder } from '../../types';
import { formatDate } from '../../lib/format';
import Icon from './Icon';

interface ReminderCardProps {
  reminder: Reminder;
  receipt: Receipt;
}

/** A return-deadline or warranty reminder (Figma "Kvitt / Reminder card") */
export default function ReminderCard({ reminder, receipt }: ReminderCardProps) {
  const isReturn = reminder.type === 'return';
  const deadline = isReturn ? receipt.returnDeadline : receipt.warrantyUntil;

  return (
    <Link to={`/receipts/${receipt.id}`} className="reminder-card">
      <p className="reminder-card__heading">
        <span>
          {receipt.product} · {receipt.store}
        </span>
        <Icon name="bell" size={20} />
      </p>
      <p className="reminder-card__type">{isReturn ? 'Skilafrestur' : 'Ábyrgð'}</p>
      <hr className="reminder-card__divider" />
      <p className="reminder-card__row">
        <span>Áminning:</span>
        <span className="mono">{formatDate(reminder.date)}</span>
      </p>
      <p className="reminder-card__row">
        <span>{isReturn ? 'Skilafrestur:' : 'Ábyrgð til:'}</span>
        <span className="mono">{formatDate(deadline)}</span>
      </p>
    </Link>
  );
}
