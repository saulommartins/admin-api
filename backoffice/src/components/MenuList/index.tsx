import React from 'react';
import MenuButton from '../MenuButton';
import MenuIcon from '../MenuIcon';
import { Container, Separator } from './styles';
import MenuUser from '../MenuUser';

export interface Props {
  menuToggle: any,
  menuOpen?: boolean;
}
const MenuList: React.FC<Props> = ({
  menuToggle,
  menuOpen,
}) => {
  return (
    <Container 
      menuToggle={menuToggle}
      menuOpen={menuOpen}>
      <MenuIcon 
        menuToggle={menuToggle}
        menuOpen={menuOpen}
        isHome 
      />
      <Separator />
      <MenuUser hasNotifications />
      <MenuButton mentions={3}/>
      <MenuButton />
      <MenuButton />
      <MenuButton />
      <MenuButton />
      <MenuButton />
    </Container>
  )
};

export default MenuList;