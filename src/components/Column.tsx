import type { Card, Column as ColumnType } from '../types';
import { AddCardForm } from './AddCardForm';

interface Props {
  column: ColumnType;
  cards: Card[];
  onAddCard: (
    columnId: string,
    title: string,
    description: string,
  ) => { ok: true } | { ok: false; error: string };
}

export function Column({ column, cards, onAddCard }: Props) {
  return (
    <section className="column" aria-label={column.name}>
      <h2>{column.name}</h2>
      <ul className="cards">
        {cards.map((card) => (
          <li key={card.id} className="card">
            <h3>{card.title}</h3>
            {card.description && <p>{card.description}</p>}
            {/* O status é sempre o nome da coluna em que o card está */}
            <span className="status">Status: {column.name}</span>
          </li>
        ))}
      </ul>
      <AddCardForm onAdd={(t, d) => onAddCard(column.id, t, d)} />
    </section>
  );
}
