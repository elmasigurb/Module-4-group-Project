import { Link, useParams } from 'react-router';
import Button from '../components/Button';
import Icon from '../components/Icon';
import InfoRow from '../components/InfoRow';
import { finnaFlokk, finnaKvittun } from '../data/mockData';
import { dagsetning, kronur } from '../lib/format';

export default function SkodaKvittun() {
  const { id } = useParams();
  const kvittun = finnaKvittun(id);

  if (!kvittun) {
    return (
      <div className="page">
        <p>Kvittun fannst ekki.</p>
        <Button to="/kvittanir" variant="secondary">
          Til baka í safnið
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/kvittanir" className="back-link">
        <Icon name="til-baka" size={16} /> Skoða kvittun
      </Link>

      <section className="info-card">
        <p className="info-card__title">
          {kvittun.vara} · {kvittun.verslun}
        </p>
        <InfoRow label="Kaupdagur" value={dagsetning(kvittun.kaupdagur)} />
        <InfoRow label="Upphæð" value={kronur(kvittun.upphaed)} />
        <InfoRow
          label="Flokkur"
          value={finnaFlokk(kvittun.flokkurId)?.nafn ?? 'Enginn'}
          mono={false}
        />
      </section>

      <section className="info-card">
        <p className="info-card__title">Skil og ábyrgð</p>
        <InfoRow label="Skilafrestur" value={dagsetning(kvittun.skilafrestur)} />
        <InfoRow label="Ábyrgð til" value={dagsetning(kvittun.abyrgdTil)} />
        <Button variant="secondary">Bæta við áminningu</Button>
      </section>

      <Button to={`/kvittanir/${kvittun.id}/kvittun`} variant="secondary">
        Opna kvittun
      </Button>
      <Button>Breyta upplýsingum</Button>
    </div>
  );
}
