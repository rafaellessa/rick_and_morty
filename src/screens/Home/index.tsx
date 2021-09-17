import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCard';
import ListItem from '../../components/ListItem';
import Loading from '../../components/Loading';
import {PersonActions} from '../../redux/reducers/reducer.persons';
import {
  getPersons,
  getPersonsMetadata,
} from '../../redux/selectors/selector.persons';
import {
  Container,
  ContentWrapper,
  HighlightCardsWrapper,
  ListTitle,
  PersonList,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const persons = useSelector(getPersons);
  const {loading, error} = useSelector(getPersonsMetadata);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    dispatch(PersonActions.requestGetAllPersons());
  };

  const renderContent = () => (
    <Container>
      <Header />
      <HighlightCardsWrapper>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCardsWrapper>
      <ContentWrapper>
        <ListTitle>Listagem</ListTitle>
        <PersonList
          data={persons}
          renderItem={({item}) => (
            <ListItem data={item} onPress={() => console.tron.log('clicou')} />
          )}
          keyExtractor={item => String(item.id)}
        />
      </ContentWrapper>
    </Container>
  );

  const renderLoading = () => <Loading />;

  const validateRender = () => {
    if (loading) {
      return renderLoading();
    }

    return renderContent();
  };

  return validateRender();
};

export default Home;
