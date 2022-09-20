import { useState, useContext } from 'react';
import Form from './Form';
import FormInput from './FormInput';
import { PokedexContext } from '../../context';

function AddPokemonForm() {
  const context = useContext(PokedexContext);

  const { setTotalPokemon, totalPokemon } = context;

  console.log('context', context);

  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const submit = (form) => {
    setTotalPokemon([...totalPokemon, form]);
  };

  return (
    <div className='AddPokemonForm'>
      <h1>Sign Up</h1>

      <Form submit={submit} initialValues={initialValues}>
        <FormInput label='First Name' name='firstName' />
        <FormInput label='Last Name' name='lastName' />
      </Form>
    </div>
  );
}

export default AddPokemonForm;
