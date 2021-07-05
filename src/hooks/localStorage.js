import { useState, useEffect } from 'react';

const fetchState = (key, initialValue) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue;

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(fetchState(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
