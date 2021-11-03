import React from 'react';

import { Loader, Spinner, Text, Point } from './styles';
import Pokebola from '../../assets/images/pokebolaload.png'

const Load: React.FC = () => {
  return (
    <Loader>
      <Spinner>
        <img src={Pokebola} alt="Loading..." />
      </Spinner>
      <Text>Loading<Point>. . .</Point></Text>
    </Loader>
  );
};

export default Load;