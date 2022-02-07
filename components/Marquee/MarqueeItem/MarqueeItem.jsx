import { Box } from '@chakra-ui/react';
import React from 'react';
import classes from './MarqueeItem.module.css';

const MarqueeItem = ({ children, ...props }) => {
  return (
    <Box className={classes.MarqueeItem} {...props}>
      {children}
    </Box>
  );
};

export default MarqueeItem;
