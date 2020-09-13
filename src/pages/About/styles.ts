import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #c3c3c3;
`;

export const Content = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Email = styled.Text`
  font-size: 15px;
  color: #080808;
`;

export const LogoutButton = styled.TouchableHighlight`
  align-self: stretch;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-color: #151515;
  margin: 5px;
  border-radius: 8px;
  border-color: #1818182a;
  border-width: 1px;
  elevation: 1;
`;

export const LogoutButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
