import React from 'react';
import { shallow } from 'enzyme';
import  Details from '../components/Dashboard/details';
import store from '../stores';

describe('test Dashboard component', () => {
  it('should render component', () => {
    const Det = shallow(<Details  store={store}/>);
    expect(Det).toMatchSnapshot();
  });
});
