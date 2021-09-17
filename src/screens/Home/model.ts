import Person from '../../assets/person.svg';
import Location from '../../assets/location.svg';
import Movies from '../../assets/movies.svg';
import {SvgProps} from 'react-native-svg';

interface CategoryProps {
  id: string;
  title: string;
  svg: React.FC<SvgProps>;
}

export const factoryCategories = (): CategoryProps[] => {
  return [
    {
      id: '1',
      title: 'Personagens',
      svg: Person,
    },
    {
      id: '2',
      title: 'Localização',
      svg: Location,
    },
    {
      id: '3',
      title: 'Episódios',
      svg: Movies,
    },
  ];
};
