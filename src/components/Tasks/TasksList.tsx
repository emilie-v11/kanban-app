import { Task } from '../../data/interfaces';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

interface TasksProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksProps) => {
  return (
    <TasksContainer>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </TasksContainer>
  );
};

export default TasksList;
