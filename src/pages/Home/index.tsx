import React, { useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';

import { Container, Header } from './styles';

import Button from '../../components/Button';
import Load from  '../../components/Load';

const Home: React.FC = () => {
  const { getPokemon, offSetPage, loading } = useAppContext();

  useEffect(() => {
    async function getPokemonList() {
      await getPokemon();
    }
    getPokemonList();
  }, [offSetPage]);

  return (
    <Container>
      <Header>
        <Button title="Previous" />
        <h1>Pokedex</h1>
        <Button title="Next" />
      </Header>
      {loading ? <Load /> : <></>}
    </Container>
  );
};

export default Home;
