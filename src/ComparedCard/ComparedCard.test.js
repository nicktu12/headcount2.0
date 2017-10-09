import ReactDom from 'react-dom';
import React from 'react';
import { shallow } from 'enzyme';
import ComparedCard from './ComparedCard';

describe('Compare card', ()=>{
  it('should match the Compare card snapshot', () => {
    const renderedComponent = shallow(
      <ComparedCard
        changeDataSet={jest.fn()}
        handleClick={jest.fn()}
        selectedCards={jest.fn()}
        compareData={jest.fn()}
      />
    );

    expect(renderedComponent).toMatchSnapshot();
  });
});
