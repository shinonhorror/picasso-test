import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { List } from './postList.styles';
import { useAppSelector, useVirtualize } from '../../shared';
import { useFetchPostsQuery } from '../../entities/posts/api/postsApi';
import { PostCard } from '../../entities/posts';

export const PostList: FC = () => {
  const posts = useAppSelector((state: RootState) => state.posts.list);
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  useFetchPostsQuery(page);

  const { virtualItems, totalHeight, endIndex } =
    useVirtualize({
      itemHeight: 220,
      itemsCount: posts.length,
      overscan: 2,
      listHeight: 1000,
      getScrollElement: useCallback(() => scrollElementRef.current, []),
    });

  useEffect(() => {
    if (endIndex === page * 10 - 2) {
      setPage((currentPage) => currentPage + 1);
    }
  }, [endIndex]);

  return (
    <List ref={scrollElementRef}>
      <div style={{ height: totalHeight }}>
        {virtualItems.map((virtualItem) => {
          const post = posts[virtualItem.index]!;
          return (
            <PostCard
              key={post.id}
              post={post}
              offset={virtualItem.offsetTop}
            />
          );
        })}
      </div>
    </List>
  );
};
