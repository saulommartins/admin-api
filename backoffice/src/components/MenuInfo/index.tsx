import React, { useCallback } from 'react';
import { Container, MenuTitle, MenuDetail } from './styles';

interface Props {
  menuTitle: string;
  menuOpen?: any;
}
const MenuInfo: React.FC<Props> = ({
  menuTitle,
  menuOpen,
}) => {
  const handleMenuDetail = useCallback(() =>{
    console.log("handleMenuDetail");
    menuOpen();
  }, [menuOpen]);
  return (
    <Container>
      <MenuDetail
        onClick={handleMenuDetail}
      />
      <MenuTitle>{menuTitle}</MenuTitle>
    </Container>
  );
};

export default MenuInfo;