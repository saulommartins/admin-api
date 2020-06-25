import React, { useState } from 'react';

import { Grid } from './styles';
import MenuList from '../MenuList';
import MenuInfo from '../MenuInfo';
import MainView from  '../MainView';
import UserInfo from '../UserInfo';

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <Grid>
      <MenuList
        menuOpen={menuOpen}
      />
      <MenuInfo  
        menuOpen={() => setMenuOpen(!menuOpen)}
        menuTitle="Menu Selecionado"
      />
      <UserInfo />
      <MainView />
    </Grid>
  );
}

export default Layout;