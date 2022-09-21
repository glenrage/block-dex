import React, { useState } from 'react';
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

      <button type='button' onClick={() => submit(form)}>
        Create new Pokemon
      </button>
    </form>
  );
}

export default Form;
