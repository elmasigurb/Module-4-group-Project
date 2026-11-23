import { useParams } from 'react-router';
import Button from '../components/Button';
import { finnaKvittun } from '../data/mockData';
import { dagsetning, kronur } from '../lib/format';
import './Pappirsforskodun.css';

/** Kvittun · Pappírsforskoðun – sýnir kvittunina eins og hún lítur út á pappír */
export default function Pappirsforskodun() {
  const { id } = useParams();
  const kvittun = finnaKvittun(id);

  return (
    <div className="paper-view">
      <div className="paper mono">
        {kvittun ? (
          <>
            {kvittun.myndUrl ? (
              <img src={kvittun.myndUrl} alt={`Kvittun frá ${kvittun.verslun}`} />
            ) : (
              <>
                <p className="paper__store">{kvittun.verslun}</p>
                <p className="paper__date">{dagsetning(kvittun.kaupdagur)}</p>
                <div className="paper__row">
                  <span>{kvittun.vara}</span>
                  <span>{kronur(kvittun.upphaed)}</span>
                </div>
                <div className="paper__total">
                  <span>Upphæð</span>
                  <strong>{kronur(kvittun.upphaed)}</strong>
                </div>
              </>
            )}
          </>
        ) : (
          <p>Kvittun fannst ekki.</p>
        )}
      </div>
      <Button to={kvittun ? `/kvittanir/${kvittun.id}` : '/kvittanir'} variant="secondary">
        Loka kvittun
      </Button>
    </div>
  );
}
