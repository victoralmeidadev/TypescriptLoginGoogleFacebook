import React from 'react';
import {
  Container,
  Photo,
  DateContent,
  DateText,
  RouteText,
  LocationWrapper,
  LocationText,
  LocationIcon,
  Footer,
  TimeWrapper,
  Time,
} from './styles';

interface ICardProps {
  date: string;
  route: string;
  location: string;
  timeToGo: string;
  image: string;
  region: string;
}

interface ICard {
  card: ICardProps;
}

const RouteCard: React.FC<ICard> = ({ card }) => {
  return (
    <Container>
      <Photo source={{ uri: card.image }} />
      <DateContent>
        <DateText>{card.date}</DateText>
      </DateContent>
      <RouteText>{card.route}</RouteText>
      <Footer>
        <LocationWrapper>
          <LocationIcon name="map-pin" size={16} />
          <LocationText>{card.location}</LocationText>
        </LocationWrapper>
        <TimeWrapper>
          <Time>{card.timeToGo}</Time>
        </TimeWrapper>
      </Footer>
    </Container>
  );
};

export default RouteCard;
