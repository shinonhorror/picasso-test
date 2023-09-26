import { combineReducers } from '@reduxjs/toolkit';
import { CombinedState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { baseApi } from '../../shared';
import { PostsState, postsApi, postsReducer } from '../../entities';

export interface IReducer {
  baseApi: CombinedState<Record<never, never>, 'USER_INFO', 'baseApi'>;
  postsApi: CombinedState<Record<never, never>, 'POSTS_DATA', 'postsApi'>;
  posts: PostsState;
}

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  postsApi: postsApi.reducer,
  posts: postsReducer,
});
