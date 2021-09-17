import React from 'react';
import {SvgProps} from 'react-native-svg';
import {Container, Title} from './styles';

interface HighlightProps {
  title: string;
  SVG: React.FC<SvgProps>;
  onPressCategory: () => void;
}

const HighlightCard: React.FC<HighlightProps> = ({
  title,
  SVG,
  onPressCategory,
}) => {
  return (
    <Container onPress={onPressCategory}>
      <SVG width={50} height={50} />
      <Title>{title}</Title>
    </Container>
  );
};

export default HighlightCard;
