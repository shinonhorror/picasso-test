import React, { FC } from 'react';
import { Wrapper } from './postsPage.style';
import { Title } from '../../shared/ui';
import { PostList } from '../../widgets';

export const PostsPage: FC = () => {
  return (
    <Wrapper>
      <Title>Лента постов</Title>
      <PostList />
    </Wrapper>
  );
};
