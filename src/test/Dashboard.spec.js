import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../components/Dashboard/dashboard';

describe('test Dashboard component', () => {
  it('should render component', () => {
    const Dash = shallow(<Dashboard  />);
    expect(Dash).toMatchSnapshot();
  });
});
