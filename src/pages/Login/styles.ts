import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #c3c3c3;

  padding: 20px;
`;

export const LoginText = styled.Text`
  font-size: 15px;
  color: #fff;
`;

export const Space = styled.View`
  height: 15px;
  background-color: transparent;
`;

export const LoginButton = styled(Icon.Button)`
  width: 250px;
  height: 40px;
  justify-content: space-around;
  margin: 5px;
`;
