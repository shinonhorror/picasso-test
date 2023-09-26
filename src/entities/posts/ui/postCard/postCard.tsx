import React, { FC } from 'react';
import {
  Post,
  PostContent,
  PostHeader,
  PostId,
  PostTitle,
  PostButton,
} from './postCard.style';
import { PostCardProps } from './types';
import { useNavigate } from 'react-router-dom';

export const PostCard: FC<PostCardProps> = ({ post, offset }) => {
  const navigate = useNavigate();

  return (
    <Post style={{ transform: `translateY(${offset}px)` }}>
      <PostHeader>
        <PostId>#{post.id}</PostId>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostContent>{post.body}</PostContent>
      <PostButton onClick={() => navigate(`/${post.id}`)}>Подробнее</PostButton>
    </Post>
  );
};
