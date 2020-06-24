import React from 'react';
import MenuButton from '../MenuButton';
import { Container, Separator } from './styles';

export interface Props {
  menuOpen?: boolean;
}
const MenuList: React.FC<Props> = ({
  menuOpen,
}) => {
  return (
    <Container menuOpen={menuOpen}>
      <MenuButton isHome />
      <Separator />
      <MenuButton hasNotifications />
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