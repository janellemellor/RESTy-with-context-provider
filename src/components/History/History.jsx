import React from 'react';
import HistoryItem from './HistoryItem';
import { useRESTy } from '../../hooks/RESTyProvider';

const History = () => {
  const { history } = useRESTy();
  
  const requestHistory = history.map(
    (item, i) => (
      <li key={i}>
        <HistoryItem {...item} />   
      </li>
    ));
  
  return (
    <ul>
      {requestHistory}
    </ul>    
  );
};

export default History;
