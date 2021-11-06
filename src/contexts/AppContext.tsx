import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Form {
  name: string;
  url: string;
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  };
}

interface Sprite {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Form[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Form;
  sprites: Sprite[];
  stats: Stats[];
  types: Types[];
  weight: number;
}

interface Url {
  url: string;
}

interface AppContextData {
  pokemons: Pokemon[];
  offSetPage: number;
  urls: Url[];
  arrayUrl: Url[];
  loading: boolean;
  setPokemons: (pokemons: Pokemon[]) => void;
  setOffSetPage: (value: number) => void;
  setUrls: (value: []) => void;
  setLoading: (value: boolean) => void;
  getListPokemon: (value: number) => void;
  getPokemonListUrl: (value: Url[]) => void;
  getPokemon: (value: number) => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [urls, setUrls] = useState([] as Url[]);
  const [arrayUrl, setArrayUrl] = useState([] as Url[]);
  const [pokemons, setPokemons] = useState([] as Pokemon[]);
  const [loading, setLoading] = useState(false);

  async function getListPokemon(offSetPage: number) {
    try {
      const { data } = await api.get(`pokemon?limit=15&offset=${offSetPage}`);

      console.log(data);

      const arrayUrls = await data.results.map(
        (results: { url: string }) => results.url,
      );      
      return arrayUrls;
    } catch (error) {
      console.log('Ops, ocorreu um erro!' + error);
    }         
  }

  async function getPokemonListUrl(arrayUrls: Url[])  {
    const arrayPokemon:Pokemon[] = [];
    console.log('Passei por aqui', arrayUrls);       
    try {
      const data = await Promise.all(
        arrayUrls.map(arrayUrls =>
          fetch(`${arrayUrls}`)))
      const json = await Promise.all(data.map(d => d.json()))
      console.log('cheguei aqui', json); 
      json.map(pokemon => {
        arrayPokemon.push(pokemon);
      });         
    } catch (error) {
      console.log(error);
      throw error;
    } 
    setPokemons([...arrayPokemon]);    
  }

  async function getPokemon(offSetPage: number) {
    setLoading(true);
    const urls = await getListPokemon(offSetPage);
    console.log(urls);
    await getPokemonListUrl(urls);
    setLoading(false);
    window.navigator.vibrate([350]);
    console.log('Pokemons', pokemons);     
  }

  function handleNextPage() {
    setLoading(true);    
    setOffSetPage(offSetPage + 15);
    console.log(offSetPage);
  }

  function handlePreviousPage() {
    if (offSetPage !== 0) {
      setLoading(true);           
      setOffSetPage(offSetPage - 15);
      console.log(offSetPage);
    }
  }

  useEffect(() => {  
    getPokemon(offSetPage);  
    
  }, [offSetPage]);

  return (
    <AppContext.Provider
      value={{
        pokemons,
        offSetPage,
        urls,
        loading,
        arrayUrl,
        setPokemons,
        setOffSetPage,
        setUrls,
        setLoading,
        getListPokemon,
        getPokemonListUrl,
        getPokemon,
        handlePreviousPage,
        handleNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

function useAppContext(): AppContextData {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }

  return context;
}

export { AppProvider, useAppContext };
