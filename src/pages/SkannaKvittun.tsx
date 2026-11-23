import { useRef, type ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function SkannaKvittun() {
  const navigate = useNavigate();
  const fileInput = useRef<HTMLInputElement>(null);

  // TODO (áfangi 5): senda skrána á Supabase Edge Function sem kallar í Claude API
  // og senda niðurstöðuna áfram á „Yfirfara og vista“.
  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    navigate('/skanna/yfirfara', { state: { skraarnafn: file.name } });
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">
        <Icon name="til-baka" size={16} /> Skanna kvittun
      </Link>

      <div className="scan-frame">
        <div className="scan-frame__inner">
          <Icon name="myndavel" size={28} />
        </div>
        <p className="scan-frame__hint">
          Settu kvittunina
          <br />
          innan rammans
        </p>
      </div>

      <input
        ref={fileInput}
        type="file"
        accept="image/*,application/pdf"
        capture="environment"
        hidden
        onChange={handleFile}
      />

      <div className="stack">
        <Button onClick={() => fileInput.current?.click()}>Taka mynd</Button>
        <Button variant="secondary" onClick={() => fileInput.current?.click()}>
          Hlaða upp mynd eða PDF
        </Button>
      </div>
    </div>
  );
}
