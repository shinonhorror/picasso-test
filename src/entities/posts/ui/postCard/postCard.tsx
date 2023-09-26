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

export const PostCard: FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Post>
      <PostHeader>
        <PostId>#{post.id}</PostId>
        <PostTitle>{post.title}</PostTitle>
      </PostHeader>
      <PostContent>{post.body}</PostContent>
      <PostButton onClick={() => navigate(`/${post.id}`)}>Подробнее</PostButton>
    </Post>
  );
};
