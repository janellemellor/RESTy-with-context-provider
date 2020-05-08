import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Form onSubmit={() => {}} url="https://github.com/janellemellor" onChange={() => {}} jsonBody="{}" />);
    expect(wrapper).toMatchSnapshot();  
  });
});
