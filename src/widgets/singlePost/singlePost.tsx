import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetchSinglePostsQuery } from '../../entities';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { Button, Loader, Title } from '../../shared';
import { Content, Wrapper } from './singlePost.style';

export const SinglePost: FC = () => {
  const postId = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetchSinglePostsQuery(postId.id || skipToken);

  if (isLoading) {
    return <Loader />;
  }
  if (data) {
    return (
      <Wrapper>
        <Button onClick={() => navigate(`/`)}>Назад</Button>
        <Title>
          #{data?.id} {data?.title}
        </Title>
        <Content>{data?.body}</Content>
      </Wrapper>
    );
  }
};
