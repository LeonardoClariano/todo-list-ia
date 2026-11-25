import { useState, type FormEvent } from 'react';

interface Props {
  onAdd: (name: string) => { ok: true } | { ok: false; error: string };
}

export function AddColumnForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = onAdd(name);
    if (result.ok) {
      setName('');
      setError('');
    } else {
      setError(result.error);
    }
  }

  return (
    <form className="add-column" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome da nova coluna"
        aria-label="Nome da nova coluna"
      />
      <button type="submit">Adicionar coluna</button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
