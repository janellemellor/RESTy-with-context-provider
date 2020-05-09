import React, { createContext, useState, useContext } from 'react';
import { fetchRequest } from '../services/fetchRequest.js';
import { useLocalStorage } from '../hooks/localStorage';

const RESTyContext = createContext();

// eslint-disable-next-line react/prop-types
export const RESTyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  const [response, setResponse] = useState({});
  const [history, setHistory] = useLocalStorage('history', []);

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
        setHistory(prevHistory => [{ url, method }, ...prevHistory]);
      }); 
  };

  const context = {
    url, 
    method, 
    jsonBody, 
    response, 
    onChange, 
    onSubmit, 
    history
  };
  
  return (
    <RESTyContext.Provider value={context} >
      {children}
    </RESTyContext.Provider>
  );
};

export const useRESTy = () => {
  const context = useContext(RESTyContext);
  return context;
};




