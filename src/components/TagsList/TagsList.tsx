import TagItem from '../TagItem/TagItem';
import './TagsList.css';

interface TaskItemProps {
  tags: string[];
}

const TagsList = ({ tags }: TaskItemProps) => {
  return (
    <div className="kanban-task-tags">
      {/* {task.tags.join(' - ')} */}
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default TagsList;