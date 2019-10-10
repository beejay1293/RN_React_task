import React from 'react';
import { shallow } from 'enzyme';
import  Header from '../components/Dashboard/header';

describe('test Header component', () => {
  it('should render component', () => {
    const Head = shallow(<Header  />);
    expect(Head).toMatchSnapshot();
  });
});
