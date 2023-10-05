import { useState, useEffect } from 'react';
import axios from 'axios';
import './KanbanBoard.css';
import KanbanColumn from '../KanbanColumn/KanbanColumn';
import { Task } from '../../data/interfaces';
import { columns } from '../../data/columns';

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
    <div className="kanban-board">
      {Object.values(columns).map((column) => (
        <KanbanColumn
          key={column.title}
          title={column.title}
          bgcolor={column.bgcolor}
          tasks={getColumnTasks(column.title)}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
