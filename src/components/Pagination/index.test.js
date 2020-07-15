import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './index';

describe('Pagination Component', () => {
  it('Tests component renders two buttons without errors', () => {
    let page = 1;
    const setPage = (val) => {
      page = val;
    };
    const component = shallow((<Pagination onNext={() => setPage(page+1)} onPrev={() => setPage(page-1)} page={page} />));
    const buttons = component.find('Button');
    expect(buttons).toHaveLength(2);
  });

  it('Tests Next click event', () => {
    let page = 1;
    const setPage = (val) => {
      page = val;
    };

    const component = shallow((<Pagination onNext={() => setPage(page+1)} onPrev={() => setPage(page-1)} page={page} />));
    component.find('[data-testid="next"]').simulate('click');
    expect(page).toBe(2);
  });

  it('Tests Previous click event', () => {
    let page = 2;
    const setPage = (val) => {
      page = val;
    };

    const component = shallow((<Pagination onNext={() => setPage(page+1)} onPrev={() => setPage(page-1)} page={page} />));
    component.find('[data-testid="prev"]').simulate('click');
    expect(page).toBe(1);
  });
});