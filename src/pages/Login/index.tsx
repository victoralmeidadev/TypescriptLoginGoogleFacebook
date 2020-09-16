import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, LoginText, Space, LoginButton, Title } from './styles';

import { useAuth } from '../../contexts/auth';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { useOnLoginFinished, useSignInGoogle, isSigned } = useAuth();

  return (
    <Container>
      <Title>Welcome to study project, sign in.</Title>
      <LoginButton
        name="google"
        backgroundColor="#c94130"
        color="#ccc"
        onPress={() => useSignInGoogle(navigation)}>
        <LoginText>Entrar com Google</LoginText>
      </LoginButton>
      <Space />
      <LoginButton
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => useOnLoginFinished(navigation)}>
        <LoginText>Entrar com Facebook</LoginText>
      </LoginButton>
    </Container>
  );
};

export default Login;
