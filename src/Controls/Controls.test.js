import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';

describe('Controls', ()=>{
  // it('should match the Compare card snapshot', () => {
  //   const renderedComponent = shallow(
  //     <Controls
  //       selectedCards={jest.fn()}
  //       compareData={jest.fn()}
  //     />
  //   );
  //
  //   expect(renderedComponent).toMatchSnapshot();
  // });

  it('should', () => {
    const controls = mount(<Controls />);

    expect(controls.find('.data-button-container')).toBeDefined();
  });
});
