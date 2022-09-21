import React, { createContext, useState, useEffect } from 'react';

const PokedexContext = createContext({
  form: {},
});

const PokedexContextProvider = ({ children }) => {
  const [customPokemon, setCustomPokemon] = useState([]);

  useEffect(() => {
    localStorage.setItem('customPokemon', JSON.stringify(customPokemon));
  }, [customPokemon]);

  return (
    <PokedexContext.Provider value={{ setCustomPokemon, customPokemon }}>
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexContextProvider };
