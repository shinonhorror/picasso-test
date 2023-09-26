import { styled } from 'styled-components';
import { Button, Description } from '../../../../shared';

export const Post = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  height: 200px;
  padding: 20px 15px;
  background-color: #f8fafb;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostId = styled(Description)`
  color: #878787;
`;

export const PostTitle = styled(Description)`
  text-transform: capitalize;
`;

export const PostContent = styled(Description)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const PostButton = styled(Button)`
  margin-left: auto;
`;
