import { Box } from '@chakra-ui/react';
import React from 'react';
import classes from './Marquee.module.css';

const Marquee = ({ children, duration, style, ...props }) => {
  return (
    <Box
      style={{
        animationDuration: duration,
        ...style,
      }}
      {...props}
      className={classes.Marquee}
    >
      {children}
    </Box>
  );
};

export default Marquee;
