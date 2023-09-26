import React from 'react';
import { PAGES, Routes } from './routes.types';
import { Navigate } from 'react-router-dom';
import { PostPage, PostsPage } from '../../pages';

export const MAIN_ROUTES: Routes = [
  {
    path: PAGES.ALL,
    main: () => <Navigate to="/" replace />,
  },
  {
    path: PAGES.POSTS,
    main: () => <PostsPage />,
  },
  {
    path: PAGES.POST,
    main: () => <PostPage />,
  },
];
