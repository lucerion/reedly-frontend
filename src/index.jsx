import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { ApiProvider } from './store';

render((
  <ApiProvider>
    <App />
  </ApiProvider>
), document.getElementById('app'));
