import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import { useRESTy, RESTyProvider } from '../../hooks/RESTyProvider';

describe('History Component', () => {
  it('matches a snapshot', () => {
    const requestHistory = [
      {
        url: 'https://github.com/janellemellor',
        method: 'GET'
      },
      {
        url: 'https://github.com/janellemellor',
        method: 'POST'
      }  
    ];
    const wrapper = shallow(
      <RESTyProvider>
        <History history={requestHistory} />
      </RESTyProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });  
});

