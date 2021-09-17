import React from 'react';
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCard';
import ListItem from '../../components/ListItem';

import {
  Container,
  HighlightCardsWrapper,
  ListTitle,
  ContentWrapper,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <HighlightCardsWrapper>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCardsWrapper>
      <ContentWrapper>
        <ListTitle>Listagem</ListTitle>
        <ListItem />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
