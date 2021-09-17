import React from 'react';

import {
  Container,
  InfoWrapper,
  ImageItem,
  Title,
  LikeIconWrapper,
} from './styles';

const ListItem: React.FC = () => {
  return (
    <Container>
      <InfoWrapper>
        <ImageItem
          source={{
            uri: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          }}
        />
        <Title>Rick Sanchez</Title>
      </InfoWrapper>
      <LikeIconWrapper />
    </Container>
  );
};

export default ListItem;
