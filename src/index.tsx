import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';

const container = document.getElementById('root') as HTMLElement;

const initialChildren = (
  <StrictMode>
    <App />
  </StrictMode>
);

const root = createRoot(container);
root.render(initialChildren);
