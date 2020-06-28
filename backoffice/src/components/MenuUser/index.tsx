import React from 'react';
import Logo from '../../assets/logo.svg'
import { Icon, Container } from './styles';
// import { Container } from '../MenuIcon/styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  menuToggle?: any;
}

const MenuUser: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  menuToggle,
}) => {
  return (
    <Container
      background-color={"var(--white)"}
    >
      <Icon
        isHome={isHome}
        hasNotifications={hasNotifications}
        mentions={mentions}
        className={selected ? 'active' : ''}
        onClick={menuToggle}
      >
        {isHome && <img src={Logo} alt='Backoffice' />}
      </Icon>
    </Container>
  )
};

export default MenuUser;