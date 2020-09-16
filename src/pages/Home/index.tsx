import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import Regions from '../../mocks/regions.mock';
import Routes from '../../mocks/routes.mock';

import {
  Container,
  Header,
  NameText,
  ProfileContainer,
  ProfilePicture,
  ProfileBadge,
  Title,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  FilterWrapper,
  FilterButton,
  FilterButtonText,
  FilterButtonSelected,
} from './styles';

import RouteCard from './components/RouteCard';

import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  const windowWidth = Dimensions.get('window').width;

  return (
    <Container>
      <Header>
        <NameText>Hi, {userInfo?.name?.split(' ')?.[0]}!</NameText>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <ProfileContainer>
            <ProfilePicture
              source={{
                uri: userInfo?.photo,
              }}
            />
            <ProfileBadge />
          </ProfileContainer>
        </TouchableOpacity>
      </Header>
      <Title>Let´s choose</Title>
      <Title>a travel route</Title>
      <SearchWrapper>
        <SearchIcon name="search" size={30} />
        <SearchInput
          placeholder="Search a route"
          placeholderTextColor="#777"
          underlineColorAndroid="transparent"
        />
      </SearchWrapper>

      <FilterWrapper>
        {Regions.map((item) => {
          if (item === 'All') {
            return (
              <FilterButtonSelected onPress={() => {}}>
                <FilterButtonText>{item}</FilterButtonText>
              </FilterButtonSelected>
            );
          }
          return (
            <FilterButton onPress={() => {}}>
              <FilterButtonText>{item}</FilterButtonText>
            </FilterButton>
          );
        })}
      </FilterWrapper>

      <Carousel
        data={Routes}
        renderItem={({ item }) => <RouteCard card={item} />}
        sliderWidth={windowWidth}
        itemWidth={350}
        layout={'default'}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        loop={true}
        loopClonesPerSide={3}
        contentContainerCustomStyle={{ marginBottom: 50 }}
      />
    </Container>
  );
};

export default Home;
