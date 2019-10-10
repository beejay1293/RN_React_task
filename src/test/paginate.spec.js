import React from 'react';
import { shallow } from 'enzyme';
import  Paginate from '../components/Dashboard/paginate';

describe('test Paginate component', () => {
  it('should render component', () => {
    const Page = shallow(<Paginate  />);
    expect(Page).toMatchSnapshot();
  });
});
