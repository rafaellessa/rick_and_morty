import React from 'react';
import {Person} from '../../redux/types/types.person';
import ListItem from '../ListItem';
import {Container} from './styles';

interface PersonListProps {
  data: Person[];
  onEnd: () => void;
}

const PersonList: React.FC<PersonListProps> = ({data, onEnd}) => {
  return (
    <Container
      data={data}
      onEndReachedThreshold={0.2}
      onEndReached={() => onEnd()}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <ListItem data={item} />}
    />
  );
};

export default PersonList;
