import styled from 'styled-components';

const Tag = styled.div`
  background-color: #e8eaed;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  margin: 0;
`;

interface TagItemProps {
  tag: string;
}

const TagItem = ({ tag }: TagItemProps) => {
  return <Tag key={tag}>{tag}</Tag>;
};

export default TagItem;
