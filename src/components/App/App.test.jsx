import React from 'react';
import { shallow } from 'enzyme';
import { RESTyProvider } from '../../hooks/RESTyProvider';
import Form from '../Form/Form';
import Response from '../Response/Response';
import History from '../History/History';

describe('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(
      <RESTyProvider >
        <Form />
        <Response />
        <History />
      </RESTyProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
