import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex } from '@chakra-ui/react';
import Marquee from '../Marquee/Marquee';
import MarqueeItem from '../Marquee/MarqueeItem/MarqueeItem';
import SharesCard from '../SharesCard/SharesCard';

const Header = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop[',
          duration: 10,
          ease: 'linear',
        },
      },
    },
  };
  return (
    <div>
      <Marquee
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        duration='40s'
      >
        {[...Array(10)].map((el, i) => (
          <MarqueeItem key={i}>
            <SharesCard
              brandName='Tesla'
              price='$20.0'
              secondPrice='-$20'
              thirdPrice='+20%'
            />
          </MarqueeItem>
          // <motion.div
          //   key={i}
          //   style={{
          //     position: 'absolute',
          //     height: '20px',
          //     width: '20px',
          //     backgroundColor: 'white',
          //   }}
          //   variants={marqueeVariants}
          //   animate='animate'
          // >
          //   {el}
          // </motion.div>
        ))}
      </Marquee>
    </div>
  );
};

export default Header;
