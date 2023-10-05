import './TasksList.css';
import { Task } from '../../data/interfaces';
import TaskItem from '../TaskItem/TaskItem';

interface TasksProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksProps) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />

      ))}
    </ul>
  );
};

export default TasksList;
