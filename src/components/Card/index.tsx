import React from 'react';

import { Pokemon, useAppContext } from '../../contexts/AppContext';

import { Container } from './styles';

const Card: React.FC = () => {
  const { pokemons } = useAppContext();

  return (
    <Container>
      <h1>Card</h1> 
    </Container>
  );  
};

export default Card;