import React from 'react';
import  Routes from '../../routes/index'
import { Navigate } from 'react-router-dom'

import { Pokemon } from '../../contexts/AppContext';

import { Container, CardImage, Title, Subtitle } from './styles';

import './card.css';

const Card: React.FC = ({ ...pokemon }) => {
  const pokemonData = { ...pokemon } as Pokemon;
  const elementTypes = pokemonData.types.map(type => type.type.name);
  let twoElements: boolean;
  if (elementTypes.length > 1) {
    twoElements = true;
  } else {
    twoElements = false;
  }

  return (    
      <Container className={`${elementTypes[0]}`} >
        <CardImage
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
          alt={pokemonData.name}
        />
        <Title>
          {pokemonData.id} . {pokemonData.name}
        </Title>
        <Subtitle>
          {!twoElements ? (
            <>
              <span className={`element span-${elementTypes[0]}`}>
                {elementTypes[0]}
              </span>
            </>
          ) : (
            <>
              <span className={`elementOne span-${elementTypes[0]}`}>
                {elementTypes[0]}
              </span>
              <span className={`elementTwo span-${elementTypes[1]}`}>
                {elementTypes[1]}
              </span>
            </>
          )}
        </Subtitle>
      </Container>    
  );
};

export default Card;
