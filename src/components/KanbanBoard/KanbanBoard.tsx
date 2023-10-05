import { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import { Task } from '../../data/interfaces';
import { columns } from '../../data/columns';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  width: 100%;
  max-width: 1440px;
  max-height: 87vh;
  margin: 0 auto;
  overflow-y: scroll;
`;

function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    axios
      // .get('https://awa.dev.adsoftware-tech.com/api/kanban/items')
      //local db json
      .get('/db/api-data.json')
      .then((response) => {
        console.log(response.data);
        const apiData: Task[] = response.data;
        setTasks(apiData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getColumnTasks = (column: string) => tasks.filter((task) => task.state === column);

  return (
    <Section>
      {Object.values(columns).map((column) => (
        <KanbanColumn
          key={column.title}
          title={column.title}
          bgcolor={column.bgcolor}
          tasks={getColumnTasks(column.title)}
        />
      ))}
    </Section>
  );
}

export default KanbanBoard;
