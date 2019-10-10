import React from 'react';
import { shallow } from 'enzyme';
import  SingleDetail from '../components/Dashboard/SingleDetail';

describe('test Single Detail component', () => {
  it('should render component', () => {
      const prop = {
        name: "RN", 
        supply: 300, 
        price: 20, 
        rank:3,
        pchange1: 23, 
        pchange2: 455, 
        pchange3: 95604
      }
    const SDetail = shallow(<SingleDetail { ...prop} />);
    expect(SDetail).toMatchSnapshot();
  });
});
