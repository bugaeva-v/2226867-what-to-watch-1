import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import MOVIES from './mocks/movies';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movieList={MOVIES}/>
  </React.StrictMode>,
);
