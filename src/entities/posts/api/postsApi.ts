import { baseApi } from '../../../shared';
import { HTTP_METHOD } from '../../../shared/constants/variables';

import { PostsResponse } from './types';

const POSTS_API_PATH = '/posts';

export const postsApi = baseApi
  .enhanceEndpoints({ addTagTypes: ['POSTS_DATA'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      fetchPosts: builder.query<PostsResponse[], number>({
        query: (start = 1) => `${POSTS_API_PATH}?_page=${start}&_limit=10`,
      }),
      fetchSinglePosts: builder.query<PostsResponse, string>({
        query: (id: string) => ({
          url: `${POSTS_API_PATH}/${id}/`,
          method: HTTP_METHOD.GET,
          providesTags: [{ type: 'POSTS_DATA', id: 'INFO' }],
        }),
      }),
    }),
  });

export const { useFetchPostsQuery, useFetchSinglePostsQuery } = postsApi;
