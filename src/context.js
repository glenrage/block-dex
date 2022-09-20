import React, { createContext, useState, useEffect } from 'react';

const PokedexContext = createContext({
  //   form: {},
});

const PokedexContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
  });

  const [totalPokemon, setTotalPokemon] = useState([]);

  console.log('total pokenon', totalPokemon);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
  });

  console.log('context form', form);

  const handleFormChange = (event) => {
    console.log('event', event);
    // Get the name of the field that caused this change event
    // Get the new value of this field
    const { name, value } = event.target;

    console.log('name', name);

    // Update state
    // Assign new value to the appropriate form field
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    // the Provider gives access to the context to its children
    <PokedexContext.Provider
      value={{ data, handleFormChange, setTotalPokemon, totalPokemon }}
    >
      {children}
    </PokedexContext.Provider>
  );
};

export { PokedexContext, PokedexContextProvider };
