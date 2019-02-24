import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import { Link } from 'react-router-dom';

describe('Home', () => {
  it('should render a really long h1 tag', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <h1>seans reactjs nodejs mongodb boilerplate</h1>
    ])).to.equal(true);
  });

  it('should contain a link to cats', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <Link to='/Cats'>Cats</Link>
    ])).to.equal(true);
  });  
});

