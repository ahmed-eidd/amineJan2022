import React from 'react';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

const NavLink = ({ href, children, style }) => {
  return (
    <NextLink href={href}>
      <Link
        style={{
          fontWeight: '500',
          transition: 'color .3s ease-in-out',
          ...style,
        }}
        _hover={{
          color: 'primary.100',
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavLink;
