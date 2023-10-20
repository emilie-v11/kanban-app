import { useEffect } from 'react';
import styled from 'styled-components';
import AppRouter from './AppRouter';
import { useAppDispatch } from './redux/hooks';
import { fetchTasks } from './services/apiCall';

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

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>
        <h1>Kanban Board</h1>
      </Header>
      <AppRouter />
    </Wrapper>
  );
}

export default App;
