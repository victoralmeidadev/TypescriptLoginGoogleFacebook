import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: #fff;
  elevation: 5;
  height: 400px;
  width: 300px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Photo = styled.Image`
  height: 150px;
  width: 300px;
`;

export const DateContent = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom-right-radius: 20px;
  /* background-color: #dbfdff; */
  background-color: #0004;
  opacity: 0.7;
  padding: 20px;
  align-self: flex-start;
`;
export const DateText = styled.Text`
  font-family: OpenSans-Regular;
  font-weight: bold;
  font-size: 16px;
  /* color: #21e2eb; */
  color: #0008;
`;

export const RouteText = styled.Text`
  font-family: OpenSans-Regular;
  font-weight: bold;
  font-size: 22px;
  color: #000;
  text-align: left;
  margin: 20px;
  padding: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

export const LocationWrapper = styled.View`
  flex-direction: row;
`;

export const LocationText = styled.Text`
  font-family: OpenSans-Regular;
  font-weight: bold;
  color: #0008;
  font-size: 16px;
`;
export const LocationIcon = styled(Icon)`
  color: #919b9d;
  margin-left: 5px;
  margin-right: 5px;
`;

export const TimeWrapper = styled.View``;
export const Time = styled.Text`
  font-family: OpenSans-Regular;
  font-weight: bold;
  color: #0008;
  font-size: 16px;
`;
