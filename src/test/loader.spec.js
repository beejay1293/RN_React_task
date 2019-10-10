import React from 'react';
import { shallow } from 'enzyme';
import  Loaders from '../components/Dashboard/loader';

describe('test Header component', () => {
  it('should render component', () => {
    const Loader = shallow(<Loaders  />);
    expect(Loader).toMatchSnapshot();
  });
});
