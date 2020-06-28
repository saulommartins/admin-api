import React from 'react';
import {
  Container,
  Profile,
  Avatar,
  UserData,
  Logout,
} from './styles';

const UserInfo: React.FC = () => {
  const userName = 'Saulo'
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Olá {userName}!!!</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Logout>
        <strong>Sign out</strong>
      </Logout>
    </Container>
  );
};

export default UserInfo;