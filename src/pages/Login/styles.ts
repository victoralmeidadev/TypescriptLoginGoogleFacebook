import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #fff;

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

export const Title = styled.Text`
  font-size: 40px;
  font-family: OpenSans-Regular;
  font-weight: bold;
  color: #0008;
  font-size: 18px;
  margin: 20px;
`;
