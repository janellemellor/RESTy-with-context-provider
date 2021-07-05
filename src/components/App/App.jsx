import React from 'react';
import Form from '../Form/Form';
import Response from '../Response/Response';
import History from '../History/History';
import { RESTyProvider } from '../../hooks/RESTyProvider';

export default function App() {
  return (
    <RESTyProvider >
      <Form />
      <Response />
      <History />
    </RESTyProvider>
    
  );
}
