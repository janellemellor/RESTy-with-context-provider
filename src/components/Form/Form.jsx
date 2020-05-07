import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup, RadioButton } from './RadioButton';

const Form = ({ onSubmit, url, onUrlChange, onInputChange, jsonBody, onJsonBodyChange }) => (
  <form onSubmit={onSubmit}>
    <fieldset>
      <input name="url-input" type="text" value={url} onUrlChange={onUrlChange} />
      <RadioButtonGroup name="methods" onInputChange={onInputChange} >
        <RadioButton value="GET" />
        <RadioButton value="POST" />
        <RadioButton value="PUT" />
        <RadioButton value="PATCH" />
        <RadioButton value="DELETE" />
      </RadioButtonGroup>
      <button>Go!</button>
      <textarea name="jsonBody" value={jsonBody} onJsonBodyChange={onJsonBodyChange}> </textarea>
    </fieldset>    
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired, 
  jsonBody: PropTypes.string,
  onJsonBodyChange: PropTypes.func
};

export default Form;
