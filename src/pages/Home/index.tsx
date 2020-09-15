import React, { useEffect } from 'react';
import { View } from 'react-native';
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
} from './styles';

import RouteCard from './components/RouteCard';

import { useAuth } from '../../contexts/auth';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { userInfo } = useAuth();

  return (
    <Container>
      <Header>
        <NameText>Hi, {userInfo?.name.split(' ')[0]}!</NameText>
        <ProfileContainer>
          <ProfilePicture
            source={{
              uri: userInfo?.photo,
            }}
          />
          <ProfileBadge />
        </ProfileContainer>
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
        {Regions.map((item) => (
          <FilterButton onPress={() => {}}>
            <FilterButtonText>{item}</FilterButtonText>
          </FilterButton>
        ))}
      </FilterWrapper>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Carousel
          data={Routes}
          renderItem={() => <RouteCard />}
          sliderWidth={300}
          itemWidth={150}
        />
      </View>
    </Container>
  );
};

export default Home;
