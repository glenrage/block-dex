import React, { createContext, useState, useEffect } from 'react';

const PokedexContext = createContext({
  form: {},
});

const PokedexContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [customPokemon, setCustomPokemon] = useState([]);

  useEffect(() => {
    localStorage.setItem('customPokemon', JSON.stringify(customPokemon));
  }, [customPokemon]);

  console.log('total pokenon', customPokemon);

  return (
    // the Provider gives access to the context to its children
    <PokedexContext.Provider value={{ setCustomPokemon, customPokemon }}>
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexContextProvider };
