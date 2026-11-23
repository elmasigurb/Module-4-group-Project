import { useParams } from 'react-router';
import Button from '../components/Button';
import { findReceipt } from '../data/mockData';
import { formatDate, formatISK } from '../lib/format';
import './ReceiptPaperView.css';

/** "Kvittun · Pappírsforskoðun": shows the receipt as it looks on paper */
export default function ReceiptPaperView() {
  const { id } = useParams();
  const receipt = findReceipt(id);

  return (
    <div className="paper-view">
      <div className="paper mono">
        {!receipt && <p>Kvittun fannst ekki.</p>}

        {receipt?.imageUrl && <img src={receipt.imageUrl} alt={`Kvittun frá ${receipt.store}`} />}

        {receipt && !receipt.imageUrl && (
          <>
            <p className="paper__store">{receipt.store}</p>
            <p className="paper__date">{formatDate(receipt.purchaseDate)}</p>
            <div className="paper__row">
              <span>{receipt.product}</span>
              <span>{formatISK(receipt.amount)}</span>
            </div>
            <div className="paper__total">
              <span>Upphæð</span>
              <strong>{formatISK(receipt.amount)}</strong>
            </div>
          </>
        )}
      </div>

      <Button to={receipt ? `/receipts/${receipt.id}` : '/receipts'} variant="secondary">
        Loka kvittun
      </Button>
    </div>
  );
}
