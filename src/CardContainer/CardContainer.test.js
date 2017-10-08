import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('Card Container', ()=>{
  it('should match the Card Container snapshot', () => {
    const cards = [{districtData: {2004: 2, 2005: 3}, location: 'Akron'},
      {districtData: {2004: .03, 2005: 2}, location: 'Colorado'},
      {districtData: {2004: 6, 2005: 3}, location: 'Summit'}];

    const renderedComponent = shallow(
      <CardContainer kinderData={cards} />
    );

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render a card for each districtData point', () => {
    const cards = [{districtData: {2004: 2, 2005: 3}, location: 'Akron'},
      {districtData: {2004: .03, 2005: 2}, location: 'Colorado'},
      {districtData: {2004: 6, 2005: 3}, location: 'Summit'}];

    const renderedComponent = shallow(
      <CardContainer
        kinderData={cards}
        schoolsSelected={["ACADEMY 20", "COLORADO"]}
        handleClick={jest.fn()}
        numberOfSelected={2}
      />
    );

    expect(renderedComponent.children().length).toEqual(3);
  });
});
