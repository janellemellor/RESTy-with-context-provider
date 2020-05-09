import React, { createContext, useState, useContext } from 'react';
import { fetchRequest } from '../services/fetchRequest.js';

const RESTyContext = createContext();

export const RESTyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  const [response, setResponse] = useState({});

  const onChange = ({ target }) => {
    const setInputsFactory = {
      url: setUrl,
      method: setMethod,
      jsonBody: setJsonBody
    };

    setInputsFactory[target.name](target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, jsonBody)
      .then(res => {
        setResponse(res);
      });
  };
  
  return (
    <RESTyContext.Provider value={{ url, method, jsonBody, response }} >
      {children}
    </RESTyContext.Provider>
  );
};

export const useUrlRequest = () => {
  const { url } = useContext(RESTyContext);
  return url;
};

//create custom hook to for handle change
export const useHandleChange = () => {
  
};



