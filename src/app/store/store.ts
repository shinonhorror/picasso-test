import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { baseApi } from '../../shared';
import { postsApi } from '../../entities';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, postsApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const dispatch = store.dispatch;
