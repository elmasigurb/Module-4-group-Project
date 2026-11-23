import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import Button from '../components/Button';
import Field from '../components/Field';
import Icon from '../components/Icon';
import { flokkar } from '../data/mockData';

export default function YfirfaraOgVista() {
  const navigate = useNavigate();

  // TODO (áfangi 5): fylla sjálfkrafa út frá niðurstöðu Claude API
  const [form, setForm] = useState({
    vara: 'Borvél',
    verslun: 'BYKO',
    kaupdagur: '2026-08-11',
    upphaed: '34490',
    flokkurId: 'framkvaemdir',
    skilafrestur: '2026-09-11',
    abyrgdTil: '2027-08-11',
  });

  function update(key: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });
  }

  // TODO (áfangi 4): vista í Supabase
  function vista(e: FormEvent) {
    e.preventDefault();
    navigate('/kvittanir');
  }

  return (
    <form className="page" onSubmit={vista}>
      <Link to="/skanna" className="back-link">
        <Icon name="til-baka" size={16} /> Yfirfara og vista
      </Link>
      <Link to="/skanna" className="link-muted">
        Skipta um mynd
      </Link>

      <Field label="Vöruheiti" value={form.vara} onChange={update('vara')} />
      <Field label="Verslun" value={form.verslun} onChange={update('verslun')} />
      <Field label="Kaupdagur" type="date" value={form.kaupdagur} onChange={update('kaupdagur')} />
      <Field
        label="Upphæð (kr.)"
        inputMode="numeric"
        value={form.upphaed}
        onChange={update('upphaed')}
      />

      <label className="field">
        <span className="field__label">Flokkur</span>
        <select className="field__input" value={form.flokkurId} onChange={update('flokkurId')}>
          <option value="">Enginn flokkur</option>
          {flokkar.map((f) => (
            <option key={f.id} value={f.id}>
              {f.nafn}
            </option>
          ))}
        </select>
      </label>

      <div className="grid-2">
        <Field
          label="Skilafrestur"
          type="date"
          value={form.skilafrestur}
          onChange={update('skilafrestur')}
        />
        <Field label="Ábyrgð til" type="date" value={form.abyrgdTil} onChange={update('abyrgdTil')} />
      </div>

      <Button type="submit">Vista kvittun</Button>
    </form>
  );
}
