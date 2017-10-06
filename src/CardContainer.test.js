import ReactDom from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('Card Container', ()=>{
  it('should match the Card Container snapshot', () => {
    const cards = {kinderData: [{data: {2004: 2, 2005: 3} , location: 'Akron'}, {data: {2004: .03, 2005: 2}, location: 'Colorado'}, {data: {2004: 6, 2005: 3}, location: 'Summit'}]}

    const renderedComponent = shallow(
      <CardContainer formattedData={cards} />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
})
