import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from './CompareContainer';

describe('Compare Container', ()=>{
  it('should render a card for every item in the array', () => {
    const compareContainer = shallow(<CompareContainer
      selectedCards={jest.fn(()=>["school 1", "school 2"])}
      compareData={jest.fn()}
      handleCompareClick={jest.fn()}
    />);
    const contChildren= compareContainer.find('.compare-container').children();

    expect(contChildren.length).toEqual(2);
  });

  it('should match the snapshot', () => {
    const compareContainer = shallow(<CompareContainer
      selectedCards={jest.fn(()=>["school 1", "school 2"])}
      compareData={jest.fn()}
      handleCompareClick={jest.fn()}
    />);

    expect(compareContainer).toMatchSnapshot();
  });
});
