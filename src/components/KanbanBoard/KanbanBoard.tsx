import { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import { Task } from '../../data/interfaces';
import { columns } from '../../data/columns';
import styled from 'styled-components';

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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    axios
      // .get('https://awa.dev.adsoftware-tech.com/api/kanban/items')
      //local db json
      .get('/db/api-data.json')
      .then((response) => {
        console.log(response.data);
        const apiData: Task[] = response.data;
        setIsPending(false);
        setTasks(apiData);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  const getColumnTasksByState = (column: string) => tasks.filter((task) => task.state === column);

  if (isPending) return <PendingMessage>Loading...</PendingMessage>;

  console.log(tasks);
  console.log(error);

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
