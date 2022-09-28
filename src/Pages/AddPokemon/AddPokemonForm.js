import { useContext, useState, forwardRef } from 'react';
import FormInput from '../../Components/Forms/FormInput';
import { PokedexContext } from '../../context/context';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import './AddPokemonForm.css';

const AddPokemonForm = () => {
  const context = useContext(PokedexContext);

  const { setCustomPokemon, data, initialValues } = context;
  const { customPokemon } = data;

  const [form, setForm] = useState(initialValues);
  const [openToast, setOpenToast] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submit = (form) => {
    setOpenToast(false);

    setCustomPokemon([...customPokemon, form]);

    setOpenToast(true);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  return (
    <div className='AddPokemonForm'>
      <h4>Add your own custom Pokemon</h4>

      <form>
        <FormInput
          handleFormChange={handleFormChange}
          label='Pokemon Name'
          name='name'
          value={form.name}
        />
        <FormInput
          handleFormChange={handleFormChange}
          label='Height'
          name='height'
          value={form.height}
        />
        <FormInput
          handleFormChange={handleFormChange}
          label='Weight'
          name='weight'
          value={form.weight}
        />
        <FormInput
          handleFormChange={handleFormChange}
          label='Description'
          name='description'
          value={form.description}
        />
        <FormInput
          handleFormChange={handleFormChange}
          label='Image url'
          name='image'
          value={form.image}
        />
      </form>

      <span className='button-container'>
        <Button variant='contained' onClick={() => submit(form)}>
          Create new Pokemon
        </Button>
      </span>

      <Snackbar
        open={openToast}
        autoHideDuration={750}
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
