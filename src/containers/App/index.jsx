import React from 'react';
import Box from '@material-ui/core/Box';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import { AppProvider } from '../../store';

import './app.css';

const App = () => (
  <AppProvider>
    <Header />
    <Box display="flex">
      <Sidebar />
      <Content />
    </Box>
  </AppProvider>
);

export default App;
