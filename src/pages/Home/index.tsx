import React, { useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';

import { Container, Header, CardContainer } from './styles';

import Button from '../../components/Button';
import Load from '../../components/Load';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const { getPokemon, offSetPage, loading, pokemons, handleNextPage, handlePreviousPage } = useAppContext();

  useEffect(() => {  
    getPokemon(offSetPage);    
  }, [offSetPage]);

  return (
    <Container>
      <Header>
        <Button title="Previous" onClick={handlePreviousPage}/>
        <h1>Pokedex</h1>
        <Button title="Next" onClick={handleNextPage}/>
      </Header>
      {loading ? <Load /> : <></>}
      <CardContainer>
      {pokemons.map((pokemon) => {
          return <Card key={pokemon.name} />;
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
