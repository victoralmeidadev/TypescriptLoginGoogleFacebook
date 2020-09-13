import React from 'react';
import { useAuth } from '../../contexts/auth';

import {
  Container,
  ProfilePicture,
  Name,
  Email,
  Content,
  LogoutButton,
  LogoutButtonText,
} from './styles';

const About: React.FC = () => {
  const { userInfo, useSignOut } = useAuth();
  return (
    <Container>
      <Content>
        <ProfilePicture source={{ uri: userInfo?.photo }} />
        <Name>{userInfo?.name}</Name>
        <Email>{userInfo?.email}</Email>
      </Content>
      <LogoutButton onPress={() => useSignOut()}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default About;
