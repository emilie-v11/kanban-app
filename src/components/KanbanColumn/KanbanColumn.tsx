import { Column } from '../../data/interfaces';
import TasksList from '../Tasks/TasksList';
import styled from 'styled-components';

const ColumnBlock = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  border-radius: 10px;
  min-width: 300px;
  max-width: 350px;
  min-height: auto;
  overflow-y: scroll;
`;

const ColumnHeader = styled.div<{ $bgcolor?: string }>`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 2;
  border-radius: 10px 10px 0 0;
  background-color: ${(props) => props.$bgcolor || 'pink'};
`;

const ColumnTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  padding: 1rem 0;
  border-bottom: #ccc 1px solid;
  border-radius: 10px 10px 0 0;
  color: #172b4d;
`;

const KanbanColumn = ({ title, bgcolor, tasks }: Column) => {
  return (
    <ColumnBlock>
      <ColumnHeader $bgcolor={bgcolor}>
        <ColumnTitle>{title}</ColumnTitle>
      </ColumnHeader>
      <TasksList tasks={tasks} />
    </ColumnBlock>
  );
};

export default KanbanColumn;
