import { useContext } from 'react';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { PokedexContext } from '../../context';

function AddPokemonForm() {
  const context = useContext(PokedexContext);

  const { setCustomPokemon, customPokemon } = context;

  const initialValues = {
    name: 'Genesis-Block-mon ',
    height: '7',
    weight: '150',
    image: 'https://i.imgur.com/NF759ph.png',
    description: 'The first custom pokemon of its kind',
  };

  const submit = (form) => {
    setCustomPokemon([...customPokemon, form]);
  };

  return (
    <div className='AddPokemonForm'>
      <h4>Add new Pokemon</h4>

      <Form submit={submit} initialValues={initialValues}>
        <FormInput label='Pokemon Name' name='name' />
        <FormInput label='Height' name='height' />
        <FormInput label='Weight' name='weight' />
        <FormInput label='Description' name='description' />
        <FormInput label='Image url' name='image' />
      </Form>
    </div>
  );
}

export default AddPokemonForm;
