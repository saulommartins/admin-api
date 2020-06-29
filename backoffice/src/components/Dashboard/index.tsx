import React, { useState } from 'react';

import { Grid } from './styles';
import MenuList from '../MenuList';
import MenuInfo from '../MenuInfo';
import MainView from  '../MainView';
import UserInfo from '../UserInfo';

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <Grid>
      <MenuList
        menuToggle={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
      <MenuInfo  
        menuTitle="Menu Selecionado"
      />
      <UserInfo />
      <MainView />
    </Grid>
  );
}

export default Dashboard;