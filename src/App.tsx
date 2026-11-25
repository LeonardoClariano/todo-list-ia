import { AddColumnForm } from './components/AddColumnForm';
import { Column } from './components/Column';
import { useBoard } from './hooks/useBoard';

export default function App() {
  const { columns, cards, addColumn, addCard } = useBoard();

  return (
    <main>
      <h1>To-do list</h1>
      <AddColumnForm onAdd={addColumn} />
      {columns.length === 0 && <p>Crie sua primeira coluna para começar.</p>}
      <div className="board">
        {columns.map((column) => (
          <Column
            key={column.id}
            column={column}
            cards={cards.filter((c) => c.columnId === column.id)}
            onAddCard={addCard}
          />
        ))}
      </div>
    </main>
  );
}
