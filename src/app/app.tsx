import React from 'react';
import { ERROR_ROUTES } from './routes/routes';
import { Route, Routes } from 'react-router-dom';
import { withProviders } from './providers';

const App = () => {
  return (
    <Routes>
      {ERROR_ROUTES.map(({ path, main }) => (
        <Route path={path} element={main()} key={path} />
      ))}
    </Routes>
  );
};

export default withProviders(App);
