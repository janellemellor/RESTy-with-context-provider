import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const RESTyContext = createContext();

export const RESTyProvider = ({ children }) => {
  //set state
  
  return (
    <RESTyContext.Provider value={{ }} >
      {children}
    </RESTyContext.Provider>
  );
};

RESTyProvider.propTypes = {
  children: PropTypes.node
};



