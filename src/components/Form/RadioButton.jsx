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

export const RadioButton = ({ }) =>



RadioButton.propTypes = {
  children: 
  name:
  onInputChange:

}