import styled from 'styled-components';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  background-color: #008299;
  padding: 0 3rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  padding: 1rem 0;
`;

function App() {
  return (
    <Wrapper>
      <Header>
        <h1>Kanban Board</h1>
      </Header>
      <main>
        <KanbanBoard />
      </main>
    </Wrapper>
  );
}

export default App;
