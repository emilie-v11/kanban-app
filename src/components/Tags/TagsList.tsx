import TagItem from './TagItem';
import styled from 'styled-components';

const TagsContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  font-size: 0.7rem;
  font-weight: bold;
`;

interface TaskItemProps {
  tags: string[];
}

const TagsList = ({ tags }: TaskItemProps) => {
  return (
    <TagsContainer>
      {/* {task.tags.join(' - ')} */}
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} />
      ))}
    </TagsContainer>
  );
};

export default TagsList;
