import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonGroup = ({ children, name, onInputChange }) => {
  const radioButtons = React.Children.map(children, child => {
    return React.cloneElement(child, {
      name,
      onInputChange 
    });
  });

  return (
    <>
      {radioButtons}
    </>
  );
};

export const RadioButton = ({ name, value, onInputChange }) => (
  <>
    <input type="radio" name={name} value={value} onInputChange={onInputChange} />
    <label htmlFor={value}>{value} </label>
  </>
);


RadioButtonGroup.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

