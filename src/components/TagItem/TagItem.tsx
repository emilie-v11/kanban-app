import './TagItem.css';

interface TagItemProps {
  tag: string;
}

const TagItem = ({ tag }: TagItemProps) => {
  return (
    <div key={tag} className="kanban-task-tag">
      {tag}
    </div>
  );
};

export default TagItem;
