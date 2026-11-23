import { Link } from 'react-router';
import Icon from '../components/Icon';
import InfoRow from '../components/InfoRow';
import { aminningar, finnaKvittun } from '../data/mockData';
import { dagsetning } from '../lib/format';

export default function Aminningar() {
  const radad = [...aminningar].sort((a, b) => a.dagsetning.localeCompare(b.dagsetning));

  return (
    <div className="page">
      <div>
        <h1 className="page-title">Áminningar</h1>
        <p className="page-subtitle">Næstu áminningar</p>
      </div>

      <div className="stack">
        {radad.map((a) => {
          const kvittun = finnaKvittun(a.kvittunId);
          if (!kvittun) return null;
          const erSkil = a.tegund === 'skilafrestur';
          return (
            <Link key={a.id} to={`/kvittanir/${kvittun.id}`} className="info-card">
              <p className="info-card__title">
                {kvittun.vara} · {kvittun.verslun}
                <Icon name="bjalla" size={16} />
              </p>
              <p className="page-subtitle">{erSkil ? 'Skilafrestur' : 'Ábyrgð'}</p>
              <InfoRow label="Áminning" value={dagsetning(a.dagsetning)} />
              <InfoRow
                label={erSkil ? 'Skilafrestur' : 'Ábyrgð til'}
                value={dagsetning(erSkil ? kvittun.skilafrestur : kvittun.abyrgdTil)}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
