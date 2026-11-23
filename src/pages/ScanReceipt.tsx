import { useRef, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import BackLink from '../components/BackLink';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function ScanReceipt() {
  const navigate = useNavigate();
  const fileInput = useRef<HTMLInputElement>(null);

  // TODO (phase 5): send the file to a Supabase Edge Function that calls the Claude API,
  // then pass the result on to the review screen.
  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    navigate('/scan/review', { state: { fileName: file.name } });
  }

  return (
    <div className="page">
      <BackLink to="/" title="Skanna kvittun" />

      <div className="split">
        <div className="scan-frame">
          <div className="scan-frame__inner">
            <Icon name="camera" size={28} />
          </div>
          <p className="scan-frame__hint">
            Settu kvittunina
            <br />
            innan rammans
          </p>
        </div>

        <div className="stack">
          <input
            ref={fileInput}
            type="file"
            accept="image/*,application/pdf"
            capture="environment"
            hidden
            onChange={handleFile}
          />
          <Button onClick={() => fileInput.current?.click()}>Taka mynd</Button>
          <Button variant="secondary" onClick={() => fileInput.current?.click()}>
            Hlaða upp mynd eða PDF
          </Button>
        </div>
      </div>
    </div>
  );
}
