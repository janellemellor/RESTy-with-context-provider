import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';
import { RESTyProvider } from '../../hooks/RESTyProvider';

describe('Response Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <RESTyProvider>
        <Response response='{}'/>
      </RESTyProvider >);
    expect(wrapper).toMatchSnapshot();  
  });  
});

