import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import CompareContainer from './CompareContainer';

describe('Compare Container', ()=>{
  it('should match the Compare Container snapshot', () => {
    const renderedComponent = shallow(
      <CompareContainer />
    );
    console.log(renderedComponent.debug());

    expect(renderedComponent).toMatchSnapshot();
    expect(true).toEqual(true);
  });
});
