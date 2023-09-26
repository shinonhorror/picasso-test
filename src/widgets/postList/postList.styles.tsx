import { styled } from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  margin: 20px;
  padding: 10px;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  padding: 20px 15px;
  background-color: #f8fafb;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 10px;
`;

export const PostId = styled.p`
  color: #878787;
  font-size: 16px;
  font-weight: 500;
`;

export const PostTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
`;

export const PostContent = styled.p`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
