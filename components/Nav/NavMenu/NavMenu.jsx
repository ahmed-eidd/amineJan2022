import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const CustomMenuItem = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <MenuItem as='a' style={{ cursor: 'pointer' }}>
        {children}
      </MenuItem>
    </NextLink>
  );
};

const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseOver={onOpen}
        style={{
          transform: 'rotate(90deg)',
          fontSize: '20px',
        }}
      >
        ...
      </MenuButton>
      <MenuList onMouseLeave={onClose}>
        <CustomMenuItem href='/'>Product Tutorials</CustomMenuItem>
        <CustomMenuItem href='/'>Investing Knowledge</CustomMenuItem>
        <CustomMenuItem href='/'>The Juice</CustomMenuItem>
        <CustomMenuItem href='/'>Learn Blog</CustomMenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
