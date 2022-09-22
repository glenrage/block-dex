import React, { useState } from 'react';
import Button from '@mui/material/Button';

import './Form.css';

export const FormContext = React.createContext({
  form: {},
});

function Form(props) {
  const { children, submit = () => {}, initialValues } = props;

  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form className='Form'>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>

      <Button variant='contained' onClick={() => submit(form)}>
        Create new Pokemon
      </Button>
    </form>
  );
}

export default Form;
