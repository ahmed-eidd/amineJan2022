import React from 'react';
import Image from 'next/image';
import { Avatar, Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';

const SharesCard = ({ icon, brandName, price, secondPrice, thirdPrice }) => {
  const checkTextColor = (text) => {
    const textArr = text.split('');
    if (textArr[0] === '+') {
      return 'greentext.100';
    }

    if (textArr[0] === '-') {
      return 'redtext.100';
    }
  };

  return (
    <Box padding='20px 30px 4px 30px'>
      <Flex justify='space-between' align='center' gap={3}>
        <Box borderRadius='full' width='28px' height='28px'>
          {icon ? (
            <Image
              layout='fill'
              objectFit='cover'
              src={icon}
              alt='shares Icon'
            />
          ) : (
            <Avatar width='100%' height='100%' name={brandName} />
          )}
        </Box>
        <Box>
          <VStack spacing={0} align='flex-start'>
            <Text fontSize='sm' color='gray.500'>
              {brandName}
            </Text>
            <HStack spacing={3}>
              <Text fontSize='xs' fontWeight='bold'>
                {price}
              </Text>
              <Text fontSize='xs' color={checkTextColor(secondPrice)}>
                {secondPrice}
              </Text>
              <Text fontSize='xs' color={checkTextColor(thirdPrice)}>
                {thirdPrice}
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default SharesCard;
