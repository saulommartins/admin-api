import React from 'react';
import MenuButton from '../MenuButton';
import { Container } from './styles';

export interface Props {
  menuToggle: any,
  menuOpen?: boolean;
}
const MenuOpenClose: React.FC<Props> = ({
  menuToggle,
  menuOpen,
}) => {
  return (
    <Container 
      menuToggle={menuToggle}
      menuOpen={menuOpen}>
      <MenuButton 
        menuToggle={menuToggle}
        isHome 
      />
    </Container>
  )
};

export default MenuOpenClose;