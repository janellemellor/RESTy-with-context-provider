import React from 'react';
import { useRESTy } from '../../hooks/RESTyProvider';

const Response = () => {
  const { response } = useRESTy();

  return (

    <pre>
      {JSON.stringify(response, null, 2)}  
    </pre>
  );
};

export default Response;
