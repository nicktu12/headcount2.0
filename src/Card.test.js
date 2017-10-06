import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
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
      <Card location="tacolandiaville" dataNode={{it: 666}} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have default state', () => {
    const renderedComponent = shallow(
      <Card
        dataNode={{2000: 1, 2001: 2}}
        location="ADAMS COUNTY 14"
        numberOfSelected= {0}
      />
    );
    const initialState = renderedComponent.state().active

    expect(initialState).toEqual(false)
  });

  it('should render paragraph containers for each key of dataNode', () => {
    const renderedComponent = shallow(
      <Card
        dataNode={{2000: 1, 2001: 2}}
        location="ADAMS COUNTY 14"
        numberOfSelected= {0}
      />
    );

    expect(renderedComponent.find('.p-container').length).toEqual(2)
  });

  // write test to mock click card function to flip active state

});
