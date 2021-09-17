import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Person} from '../../redux/types/types.person';

import {
  Container,
  InfoWrapper,
  ImageItem,
  Title,
  LikeIconWrapper,
} from './styles';

interface ListItemProps extends TouchableOpacityProps {
  data: Person;
}

const ListItem: React.FC<ListItemProps> = ({data, ...rest}) => {
  return (
    <Container {...rest}>
      <InfoWrapper>
        <ImageItem
          source={{
            uri: data.image,
          }}
        />
        <Title>{data.name}</Title>
      </InfoWrapper>
      <LikeIconWrapper />
    </Container>
  );
};

export default ListItem;
