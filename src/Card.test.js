import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import config from './setupTests';
import Adapter from 'enzyme-adapter-react-15';


describe('Card', () => {
  let locationArray = ["ACADEMY 20", "COLORADO"];


  it('should match the Card snapshot', () => {

    const renderedComponent = shallow(
      <Card schoolsSelected={locationArray} location="Colorado" dataNode={{}} />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match a diff card snapshot', () => {
    const renderedComponent = shallow(
      <Card
        schoolsSelected={locationArray}
        location="tacolandiaville"
        dataNode={{it: 666}} />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render paragraph containers for each key of dataNode', () => {
    const renderedComponent = shallow(
      <Card
        dataNode={{2000: 1, 2001: 2}}
        location="ADAMS COUNTY 14"
        numberOfSelected={0}
        schoolsSelected={locationArray}
      />
    );

    expect(renderedComponent.find('.p-container').length).toEqual(2);
  });


});
