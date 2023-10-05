import './App.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <main>
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
