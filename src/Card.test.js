import ReactDom from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
// import Adapter from 'enzyme-adapter-react-15';


describe('Card', () => {
  it('should match the Card snapshot', () => {
    const renderedComponent = shallow(
      <Card location="Colorado" dataNode={{}} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match a diff card snapshot', () => {
    const renderedComponent = shallow(
      <Card location="tacolandiaville" dataNode="it is a lit place" />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
