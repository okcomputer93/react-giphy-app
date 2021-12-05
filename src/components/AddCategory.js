import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => setInputValue(event.target.value);

  const submit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length < 2) return;

    setCategories((previousCategories) => [inputValue, ...previousCategories]);
    setInputValue('');
  };

  return (
    <form onSubmit={submit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
