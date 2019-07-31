import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <React.Fragment>
      <Header onMenuButtonClick={toggleSidebar} />
      <Box display="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <Content />
      </Box>
    </React.Fragment>
  );
};

export default Layout;
