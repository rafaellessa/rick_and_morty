import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import HighlightCard from '../../components/HighlightCard';
import Loading from '../../components/Loading';
import PersonList from '../../components/PersonList';
import {PersonActions} from '../../redux/reducers/reducer.persons';
import {
  getPersons,
  getPersonsMetadata,
} from '../../redux/selectors/selector.persons';
import {factoryCategories} from './model';
import {
  Container,
  ContentWrapper,
  HighlightCardsWrapper,
  ListTitle,
} from './styles';

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [pagePersons, setPagePersons] = useState(0);

  const dispatch = useDispatch();
  const persons = useSelector(getPersons);
  const {loading, error} = useSelector(getPersonsMetadata);
  const categories = factoryCategories();

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    dispatch(PersonActions.requestGetAllPersons({}));
  };

  function handleClickCategory(index: number) {
    setIndex(index);
  }

  const renderList = useCallback(() => {
    switch (index) {
      case 0:
        return (
          <PersonList
            data={persons}
            onEnd={() => console.tron.log('Passei na tela')}
          />
        );
      default:
        return (
          <PersonList
            data={persons}
            onEnd={() => console.tron.log('Passei na tela')}
          />
        );
    }
  }, [index]);

  const renderContent = () => (
    <Container>
      <Header />
      <HighlightCardsWrapper>
        {categories.map((category, index) => (
          <HighlightCard
            key={category.id}
            title={category.title}
            SVG={category.svg}
            onPressCategory={() => {
              handleClickCategory(index);
            }}
          />
        ))}
      </HighlightCardsWrapper>
      <ContentWrapper>
        <ListTitle>Listagem</ListTitle>
        {renderList()}
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
