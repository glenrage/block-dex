import TextField from '@mui/material/TextField';

import './FormInput.css';

function FormInput({ handleFormChange, label, type, name, value }) {
  return (
    <div className='FormInput'>
      <label>{label}</label>
      <TextField
        className='input-field'
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleFormChange(e)}
      />
    </div>
  );
}

export default FormInput;
