import React from 'react';

const Response = ({ response }) => (
  <pre>
    {JSON.stringify(response, null, 2)}  
  </pre>
);

export default Response;
