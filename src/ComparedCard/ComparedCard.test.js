import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import ComparedCard from './ComparedCard';

describe('Compare card', ()=>{
  it('should match the Compare card snapshot', () => {
    const renderedComponent = shallow(
      <ComparedCard
        selectedCards={jest.fn()}
        compareData={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
