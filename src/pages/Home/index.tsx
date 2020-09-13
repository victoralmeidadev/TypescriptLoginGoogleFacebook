import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, LoginText, Space, LoginButton } from './styles';

import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { useOnLoginFinished, useSignInGoogle, isSigned } = useAuth();

  useEffect(() => {
    if (isSigned) {
      navigation.navigate('About');
    } else {
      navigation.navigate('Home');
    }
  }, [isSigned]);

  return (
    <Container>
      <LoginButton
        name="google"
        backgroundColor="#c94130"
        color="#ccc"
        onPress={() => useSignInGoogle()}>
        <LoginText>Entrar com Google</LoginText>
      </LoginButton>
      <Space />
      <LoginButton
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() => useOnLoginFinished()}>
        <LoginText>Entrar com Facebook</LoginText>
      </LoginButton>
    </Container>
  );
};

export default Home;
