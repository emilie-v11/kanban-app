import './TaskItem.css';
import { Task } from '../../data/interfaces';
import TagsList from '../TagsList/TagsList';

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  console.log(task.affected_user_id);
  return (
    <li key={task.id} className="kanban-task">
      <TagsList tags={task.tags} />
      <div className="kanban-task-content">
        <h3>{task.title}</h3>
        <p className="kanban-task-description">{task.description}</p>
      </div>
      {typeof task.affected_user_id === 'number' && (
        <p className="kanban-task-affected-user">
          Utilisateur affecté :
          <span className="kanban-task-affected-user__number">{task.affected_user_id}</span>
        </p>
      )}
    </li>
  );
};

export default TaskItem;
