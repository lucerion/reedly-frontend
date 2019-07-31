import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';

import './app.css';

const App = () => (
  <Layout />
);

ReactDOM.render(<App />, document.getElementById('app'));
