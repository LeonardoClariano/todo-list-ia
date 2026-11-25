import { useState } from 'react';
import type { Card, Column } from '../types';

type Result = { ok: true } | { ok: false; error: string };

const newId = () => crypto.randomUUID();

export function useBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [cards, setCards] = useState<Card[]>([]);

  function addColumn(rawName: string): Result {
    const name = rawName.trim();
    if (!name) return { ok: false, error: 'Informe o nome da coluna.' };
    if (columns.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      return { ok: false, error: 'Já existe uma coluna com esse nome.' };
    }
    setColumns((prev) => [...prev, { id: newId(), name }]);
    return { ok: true };
  }

  function addCard(
    columnId: string,
    rawTitle: string,
    rawDescription: string,
  ): Result {
    const title = rawTitle.trim();
    if (!title) return { ok: false, error: 'Informe o título do card.' };
    setCards((prev) => [
      ...prev,
      { id: newId(), title, description: rawDescription.trim(), columnId },
    ]);
    return { ok: true };
  }

  return { columns, cards, addColumn, addCard };
}
