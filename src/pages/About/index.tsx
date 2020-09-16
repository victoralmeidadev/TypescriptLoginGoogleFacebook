import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../contexts/auth';

import {
  Container,
  ProfilePicture,
  Name,
  Email,
  Content,
  LogoutButton,
  LogoutButtonText,
  BackButton,
} from './styles';

const About: React.FC = () => {
  const navigation = useNavigation();
  const { userInfo, useSignOut } = useAuth();

  return (
    <Container>
      <BackButton
        name="arrow-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Content>
        <ProfilePicture source={{ uri: userInfo?.photo }} />
        <Name>{userInfo?.name}</Name>
        <Email>{userInfo?.email}</Email>
      </Content>
      <LogoutButton onPress={() => useSignOut(navigation)}>
        <LogoutButtonText>Sair</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
};

export default About;
