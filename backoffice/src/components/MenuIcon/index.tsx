import React from 'react';
import Logo from '../../assets/logo.svg'
import { Container, IconClose, IconOpen } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  menuToggle?: any;
  menuOpen?: boolean;
}

const MenuIcon: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  menuToggle,
  menuOpen,
}) => {
  if (menuOpen === true) {
    return (
      <Container>
        <IconClose
          isHome={isHome}
          hasNotifications={hasNotifications}
          mentions={mentions}
          className={selected ? 'active' : ''}
          onClick={menuToggle}
        >
          {isHome && <img src={Logo} alt='Backoffice' />}
        </IconClose>
      </Container>
    );
  }
  return (
    <Container>
      <IconOpen
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
        onClick={menuToggle}
      >
        {isHome && <img src={Logo} alt='Backoffice' />}
      </IconOpen>
    </Container>
  );
};

export default MenuIcon;