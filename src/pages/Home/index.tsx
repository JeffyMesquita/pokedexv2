import React, { useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';

import { Container, CardContainer, Footer } from './styles';

import Button from '../../components/Button';
import Load from '../../components/Load';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Home:React.FC = () => {
  const {
    getPokemon,
    offSetPage,
    loading,
    pokemons,
    handleNextPage,
    handlePreviousPage,
  } = useAppContext();

  return (
    <Container>
      <Header />     
      {loading ? (
        <Load />
      ) : (
        <>
          <CardContainer>
            {pokemons.map(pokemon => {
              return <Card key={pokemon.id} {...pokemon} />;
            })}
          </CardContainer>
          <Footer>
            <Button title="Previous" onClick={handlePreviousPage} />
            <Button title="Next" onClick={handleNextPage} />
          </Footer>
        </>
      )}
    </Container>
  );
};

export default Home;



