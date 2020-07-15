import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

const setUpComponent = () => {
  const component = shallow((<Search />));
  return component;
}

describe('Search Form Component', () => {
  let component;
  beforeEach(() => {
    component = setUpComponent();
  });
  it('Tests component renders the form without errors', () => {
    const form = component.find('Form');
    expect(form).toHaveLength(1);
  });
});