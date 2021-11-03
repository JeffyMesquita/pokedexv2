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


interface Pokemon {
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
  loading: boolean;
  setPokemons: (pokemons: Pokemon[]) => void;
  setOffSetPage: (value: number) => void;
  setUrls: (value: []) => void;
  setLoading: (value: boolean) => void;
  getListPokemon: () => void;
  getPokemonListUrl: () => void;
  getPokemon: () => void;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [offSetPage, setOffSetPage] = useState(0);
  const [urls, setUrls] = useState([] as Url[]);
  const [pokemons, setPokemons] = useState([] as Pokemon[]);  
  const [loading, setLoading] = useState(false);

  async function getListPokemon() {
    try {
      const { data } = await api.get(`pokemon?limit=15&offset=${offSetPage}`);

      console.log(data);

      const arrayUrls = await data.results.map(
        (results: { name: string }) => results.name,
      );

      setUrls(arrayUrls);
      console.log(arrayUrls);
    } catch (error) {
      console.log('Ops, ocorreu um erro!' + error);
    }
  }

  async function getPokemonListUrl() {
    const arrayPokemon = [];

    for (let i = 0; i < urls.length; i++) {
      const  url  = urls[i];   
      console.log(url);
      try { 
        const { data } = await api.get(`pokemon/${url}/`);        

        arrayPokemon.push(data);
      } catch (error) {
        console.log('Ops, ocorreu um erro!' + error);
      }      
    }
    console.log(arrayPokemon);
    setPokemons([...pokemons, ...arrayPokemon]);
  }

  async function getPokemon() {
    await getListPokemon();
    console.log(urls);
    await getPokemonListUrl();
    console.log(pokemons);
    setLoading(false);
  }

  function handleNextPage() {
    setLoading(true);
    setUrls([]);
    setPokemons([]);
    setOffSetPage(offSetPage + 15);
    //console.log(offSetPage);
  }

  function handlePreviousPage() {
    if (offSetPage !== 0) {
      setLoading(true);
      setUrls([]);
      setPokemons([]);      
      setOffSetPage(offSetPage - 15);
      //console.log(offSetPage);
    }
  }

  return (
    <AppContext.Provider
      value={{
        pokemons,
        offSetPage,
        urls,
        loading,
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
