import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import BackLink from '../components/BackLink';
import Button from '../components/Button';
import Field from '../components/Field';
import { categories } from '../data/mockData';

/** "Yfirfara og vista": the user checks the scanned data before saving */
export default function ReviewReceipt() {
  const navigate = useNavigate();

  // TODO (phase 5): prefill from the Claude API result instead of mock values
  const [form, setForm] = useState({
    product: 'Borvél',
    store: 'BYKO',
    purchaseDate: '2026-08-11',
    amount: '34490',
    categoryId: 'renovation',
    returnDeadline: '2026-09-11',
    warrantyUntil: '2027-08-11',
  });

  function update(key: keyof typeof form) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value });
  }

  // TODO (phase 4): save to Supabase
  function save(e: FormEvent) {
    e.preventDefault();
    navigate('/receipts');
  }

  return (
    <form className="page page--narrow" onSubmit={save}>
      <BackLink to="/scan" title="Yfirfara og vista" />
      <Link to="/scan" className="link-muted">
        Skipta um mynd
      </Link>

      <Field label="Vöruheiti" value={form.product} onChange={update('product')} />
      <Field label="Verslun" value={form.store} onChange={update('store')} />

      <div className="grid-2">
        <Field
          label="Kaupdagur"
          type="date"
          value={form.purchaseDate}
          onChange={update('purchaseDate')}
        />
        <Field
          label="Upphæð (kr.)"
          inputMode="numeric"
          value={form.amount}
          onChange={update('amount')}
        />
      </div>

      <label className="field">
        <span className="field__label">Flokkur</span>
        <select className="field__input" value={form.categoryId} onChange={update('categoryId')}>
          <option value="">Enginn flokkur</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <div className="grid-2">
        <Field
          label="Skilafrestur"
          type="date"
          value={form.returnDeadline}
          onChange={update('returnDeadline')}
        />
        <Field
          label="Ábyrgð til"
          type="date"
          value={form.warrantyUntil}
          onChange={update('warrantyUntil')}
        />
      </div>

      <Button type="submit">Vista kvittun</Button>
    </form>
  );
}
