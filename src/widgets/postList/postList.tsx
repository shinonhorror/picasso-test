import React, { FC, useEffect, useState } from 'react';
import { List } from './postList.styles';
import { Loader } from '../../shared';
import { useFetchPostsQuery } from '../../entities/posts/api/postsApi';
import { PostCard } from '../../entities/posts';

export const PostList: FC = () => {
  const [start, setStart] = useState(1);

  const { data, isLoading, isFetching } = useFetchPostsQuery(start);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250 && start > 1) {
        setStart((prevStartIndex) => prevStartIndex - 1);
      } else if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isFetching
      ) {
        setStart((prevStartIndex) => prevStartIndex + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [start, isFetching]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {data?.map((post) => {
            return <PostCard post={post} key={`${post.userId}${post.id}`} />;
          })}
        </List>
      )}
    </>
  );
};
