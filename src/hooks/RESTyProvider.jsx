import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const RESTyContext = createContext();

export const RESTyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [jsonBody, setJsonBody] = useState('');
  const [response, setResponse] = useState('');

  //add onChange that sets url, method, jsonBody
  //add handleSubmit function that fetches from the service function and sets the response
  
  return (
    <RESTyContext.Provider value={{ url, method, jsonBody, response }} >
      {children}
    </RESTyContext.Provider>
  );
};

RESTyProvider.propTypes = {
  children: PropTypes.node
};

export const useUrlRequest = () => {
  const { url } = useContext(RESTyContext);
  return url;
};



