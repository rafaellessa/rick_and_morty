import React from 'react';

import {Container} from './styles';
import Logo from '../../assets/rick.svg';
import {RFPercentage} from 'react-native-responsive-fontsize';

const RickLogo: React.FC = () => {
  return (
    <Container>
      <Logo width={RFPercentage(45)} />
    </Container>
  );
};

export default RickLogo;
