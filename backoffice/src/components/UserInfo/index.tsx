import React from 'react';
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Logout,
} from './styles';
import authService from '../../services/auth.service';
import { useHistory } from 'react-router-dom';

const UserInfo: React.FC = () => {
  const history = useHistory();
  const getUserInfo = () => {
    return JSON.parse(sessionStorage.user);
  }
  const getUserName = () => getUserInfo()?.user?.name;
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Olá {getUserName()}!!!</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Logout
        onClick={(e) => { 
          authService.logout();
          history.push("/login");
        }}
      >
        <strong>Sign out</strong>
      </Logout>
    </Container>
  );
};

export default UserInfo;
