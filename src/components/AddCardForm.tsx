import { useState, type FormEvent } from 'react';

interface Props {
  onAdd: (
    title: string,
    description: string,
  ) => { ok: true } | { ok: false; error: string };
}

export function AddCardForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = onAdd(title, description);
    if (result.ok) {
      setTitle('');
      setDescription('');
      setError('');
    } else {
      setError(result.error);
    }
  }

  return (
    <form className="add-card" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        aria-label="Título do card"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Breve descrição"
        aria-label="Descrição do card"
        rows={2}
      />
      <button type="submit">Adicionar card</button>
      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
