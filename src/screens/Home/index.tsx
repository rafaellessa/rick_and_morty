import React from 'react';
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCard';

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
      </ContentWrapper>
    </Container>
  );
};

export default Home;
