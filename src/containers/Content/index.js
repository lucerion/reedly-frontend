import React from 'react';
import Box from '@material-ui/core/Box';
import Item from './Item';
import { AppContext } from '../../contexts';

import './content.css';

const renderItem = (item) => (
  <Item
    label={item.feed && item.feed.title}
    title={item.title}
    content={item.content}
    key={item.id}
  />
);

const renderItems = (items) => items.map((item) => renderItem(item));

const Content = () => (
  <AppContext.Consumer>
    {({content}) => (
      <Box flex={1} className="content">
        {renderItems(content)}
      </Box>
    )}
  </AppContext.Consumer>
);

export default Content;
