import KanbanColumn from '../KanbanColumn/KanbanColumn';
import { columns } from '../../data/columns';
import styled from 'styled-components';
import { useAppSelector } from '../../redux/hooks';

const Section = styled.main`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  width: 100%;
  max-width: 1440px;
  max-height: 87vh;
  margin: 0 auto;
  overflow-y: scroll;
`;

const PendingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  color: #fff;
  font-size: 2rem;
`;

function KanbanBoard() {
  const { tasks, isPending, error } = useAppSelector((state) => state.tasks);

  const getColumnTasksByState = (column: string) => tasks.filter((task) => task.state === column);

  if (isPending) return <PendingMessage>Loading...</PendingMessage>;
  if (error) return <PendingMessage>{error}</PendingMessage>;

  return (
    <Section>
      {Object.values(columns).map((column) => (
        <KanbanColumn
          key={column.title}
          title={column.title}
          bgcolor={column.bgcolor}
          tasks={getColumnTasksByState(column.title)}
        />
      ))}
    </Section>
  );
}

export default KanbanBoard;
