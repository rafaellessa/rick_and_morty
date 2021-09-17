import React from 'react';

import {Container, Title} from './styles';

import Person from '../../assets/person.svg';
import Location from '../../assets/location.svg';
import Movies from '../../assets/movies.svg';

interface HighlightProps {
  key: string;
  title: string;
}

const HighlightCard: React.FC = () => {
  return (
    <Container>
      <Person width={50} height={50} />
      <Title>Personagens</Title>
    </Container>
  );
};

export default HighlightCard;
