import { Task } from '../../data/interfaces';
import TagsList from '../Tags/TagsList';
import styled from 'styled-components';

const TaskContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 225px;
  height: 205px;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 10px;
`;

const TaskTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const TaskContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
`;

const TaskDescription = styled.p`
  font-size: 0.9rem;
  /* text-align: justify; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

const TaskAffectedUser = styled.p`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #666;
`;

const TaskAffectedUserNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: #d9d9d9 1px solid;
`;

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  console.log(task.affected_user_id);
  return (
    <TaskContainer key={task.id}>
      <TagsList tags={task.tags} />
      <TaskContent>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
      </TaskContent>
      {typeof task.affected_user_id === 'number' && (
        <TaskAffectedUser>
          Utilisateur affecté :
          <TaskAffectedUserNumber>{task.affected_user_id}</TaskAffectedUserNumber>
        </TaskAffectedUser>
      )}
    </TaskContainer>
  );
};

export default TaskItem;
