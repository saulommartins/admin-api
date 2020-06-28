import React from 'react';
import Logo from '../../assets/logo.svg'
import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  menuToggle?: any;
}

const MenuButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  menuToggle,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      onClick={menuToggle}
    >
      {isHome && <img src={Logo} alt='Backoffice'/>}
    </Button>
  )
};

export default MenuButton;