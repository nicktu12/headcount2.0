import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('Card Container', ()=>{
  it('should match the Card Container snapshot', () => {
    const cards = [{data: {2004: 2, 2005: 3}, location: 'Akron'},
     {data: {2004: .03, 2005: 2}, location: 'Colorado'},
     {data: {2004: 6, 2005: 3}, location: 'Summit'}]

    const renderedComponent = shallow(
      <CardContainer kinderData={cards} />
    );

    expect(renderedComponent).toMatchSnapshot();
    expect(true).toEqual(true)
  })

  it('should render a card for each data point', () => {
    const cards = [{data: {2004: 2, 2005: 3}, location: 'Akron'},
     {data: {2004: .03, 2005: 2}, location: 'Colorado'},
     {data: {2004: 6, 2005: 3}, location: 'Summit'}]

    const renderedComponent = mount(
      <CardContainer kinderData={cards} />
    );
    console.log(renderedComponent.debug());

    expect(renderedComponent.find('.card').length).toEqual(3)
  })
})
