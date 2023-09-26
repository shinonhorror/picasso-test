import React, { FC } from 'react';

import { Wrapper } from './postPage.style';
import { SinglePost } from '../../widgets';

export const PostPage: FC = () => {
  return (
    <Wrapper>
      <SinglePost />
    </Wrapper>
  );
};
