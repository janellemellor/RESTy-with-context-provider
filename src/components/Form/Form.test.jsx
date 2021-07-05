import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { RESTyProvider } from '../../hooks/RESTyProvider';

describe('Form Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RESTyProvider>
        <Form onSubmit={() => {}} url="https://github.com/janellemellor" onChange={() => {}} jsonBody="{}" />
      </RESTyProvider>);
    expect(wrapper).toMatchSnapshot();  
  });
});
