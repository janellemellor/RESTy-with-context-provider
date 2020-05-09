import React from 'react';
import { RadioButtonGroup, RadioButton } from './RadioButton';
import { useRESTy } from '../../hooks/RESTyProvider';

const Form = () => {
  const { onSubmit, url, onChange, jsonBody } = useRESTy();

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <input name="url-input" type="text" value={url} onChange={onChange} />
        <RadioButtonGroup name="methods" onuChange={onChange} >
          <RadioButton value="GET" />
          <RadioButton value="POST" />
          <RadioButton value="PUT" />
          <RadioButton value="PATCH" />
          <RadioButton value="DELETE" />
        </RadioButtonGroup>
        <button>Go!</button>
        <textarea name="jsonBody" value={jsonBody} onChange={onChange}> </textarea>
      </fieldset>    
    </form>
  );
};

export default Form;
