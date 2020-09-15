import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #fff;
  padding: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NameText = styled.Text`
  font-family: OpenSans-Regular;
  font-size: 18px;
  color: #777;
`;

export const ProfileContainer = styled.View`
  position: relative;
`;

export const ProfilePicture = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

export const ProfileBadge = styled.View`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #fc1a40;
  border-width: 2px;
  border-color: #fff;
  right: 0;
  top: 0;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: OpenSans-ExtraBold;
  font-weight: bold;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  border-radius: 15px;
  height: 60px;
  background-color: #fff;
  elevation: 5;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  padding-left: 10px;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  padding-left: 10px;
  height: 60px;
`;

export const SearchIcon = styled(Icon)`
  color: #777;
  margin-left: 10px;
`;

export const FilterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const FilterButton = styled.TouchableHighlight`
  align-self: stretch;
`;

export const FilterButtonText = styled.Text`
  font-size: 20px;
  font-family: OpenSans-Regular;
  color: #777;
`;
