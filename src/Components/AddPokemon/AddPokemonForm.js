import { useContext, useState, forwardRef } from 'react';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { PokedexContext } from '../../context/context';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AddPokemonForm = () => {
  const [openToast, setOpenToast] = useState(false);

  const context = useContext(PokedexContext);
  const { setCustomPokemon, customPokemon } = context;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  const submit = (form) => {
    setOpenToast(false);

    setCustomPokemon([...customPokemon, form]);

    setOpenToast(true);
  };

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

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  return (
    <div className='AddPokemonForm'>
      <h4>Add your own custom Pokemon</h4>

      <Form submit={submit} initialValues={initialValues}>
        <FormInput label='Pokemon Name' name='name' />
        <FormInput label='Height' name='height' />
        <FormInput label='Weight' name='weight' />
        <FormInput label='Description' name='description' />
        <FormInput label='Image url' name='image' />
      </Form>

      <Snackbar
        open={openToast}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {`Successfully added ${
            customPokemon && customPokemon[customPokemon?.length - 1]?.name
          }`}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AddPokemonForm;
