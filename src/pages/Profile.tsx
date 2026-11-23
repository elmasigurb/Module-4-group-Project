import { useState } from 'react';
import Button from '../components/Button';
import CategoryTile from '../components/CategoryTile';
import Field from '../components/Field';
import { categories, currentUser } from '../data/mockData';

/** "Mínar upplýsingar": user details and categories */
export default function Profile() {
  // TODO (phase 4): load and save with Supabase auth
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  return (
    <div className="page page--narrow">
      <h1 className="page-title">Mínar upplýsingar</h1>

      <Field
        label="Nafn"
        placeholder="Nafnið þitt"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Field
        label="Netfang"
        type="email"
        placeholder="Netfangið þitt"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h2 className="section-title">Mínir flokkar</h2>
      <Button variant="secondary">Breyta eða bæta við flokki</Button>
      <div className="grid-2">
        {categories.map((c) => (
          <CategoryTile key={c.id} to={`/categories/${c.id}`} label={c.name} />
        ))}
      </div>
    </div>
  );
}
