import { createSlice } from '@reduxjs/toolkit';
import { PostsResponse, postsApi } from '../api';

export type PostsState = {
  list: PostsResponse[];
};

const initialState: PostsState = {
  list: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.fetchPosts.matchFulfilled,
      (state, { payload }) => {
        state.list = [...state.list, ...payload];
      }
    );
  },
});

export const postsReducer = postsSlice.reducer;
