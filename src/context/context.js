import React, { createContext, useState, useEffect } from 'react';

const PokedexContext = createContext({});

const PokedexContextProvider = ({ children }) => {
  const [state, setState] = useState({
    customPokemon: [],
  });

  useEffect(() => {
    localStorage.setItem('customPokemon', JSON.stringify(state.customPokemon));
  }, [state.customPokemon]);

  const initialValues = {
    name: 'Genesis-Block-mon ',
    height: '7',
    weight: '150',
    image: 'https://i.imgur.com/NF759ph.png',
    description: 'The first custom pokemon of its kind',
    id: Math.floor(1000 + Math.random() * 900000),
    capture_rate: '30',
    base_happiness: '20',
    growth_rate: '12',
  };

  return (
    <PokedexContext.Provider
      value={{
        initialValues,
        data: state,
        setCustomPokemon: (formData) => {
          setState({ ...state, customPokemon: formData });
        },
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexContextProvider };
