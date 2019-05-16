import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import configure from 'store/configure';

const store = configure();

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Root;