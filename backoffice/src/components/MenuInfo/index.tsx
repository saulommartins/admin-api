import React from 'react';
import { Container, MenuTitle } from './styles';

interface Props {
  menuTitle: string;
}
const MenuInfo: React.FC<Props> = ({
  menuTitle,
}) => {
  return (
    <Container>
      <MenuTitle>{menuTitle}</MenuTitle>
    </Container>
  );
};

export default MenuInfo;