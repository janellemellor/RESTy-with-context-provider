import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';

describe('Response Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Response />);
    expect(wrapper).toMatchSnapshot();  
  });  
});

