import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('HistoryItem Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<HistoryItem method='GET' url='https://github.com/janellemellor' />);
    expect(wrapper).toMatchSnapshot();
  });  
});

