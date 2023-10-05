import './KanbanColumn.css';
import { Column } from '../../data/interfaces';
import TasksList from '../TasksList/TasksList';

const KanbanColumn = ({ title, color, tasks }: Column) => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
      </div>
      <TasksList tasks={tasks} />
    </div>
  );
};

export default KanbanColumn;
