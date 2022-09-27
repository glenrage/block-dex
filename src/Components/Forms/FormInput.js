import './FormInput.css';

function FormInput({ handleFormChange, label, type, name, value }) {
  return (
    <div className='FormInput'>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleFormChange(e)}
      />
    </div>
  );
}

export default FormInput;
