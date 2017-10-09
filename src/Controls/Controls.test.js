import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';
import helper from '../helper';

describe('Controls', ()=>{
  let mockFunc;
  let controls;
  let dataArray;
  beforeEach(() => {
    mockFunc = jest.fn();
    let dataArray = [
      { name: "HS Graduation Rates",
        districtData: 1
      },
      { name: "Kindergartens in Full Day Program",
        districtData: 2
      },
      { name: "Grade 3 Test Data",
        districtData: 3
      }
    ];
    controls = mount(<Controls
      dataArray={dataArray}
      changeDataSet={mockFunc}
      onChange={mockFunc}
      helper={helper}
      handleClick={mockFunc}
    />);
  });


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
    //tried mount and it didnt work
    // const controls = shallow(<Controls
    //   dataArray={dataArray}
    // />);

    expect(dataArray.length).toBe(3);
  });

  it('input val in state should change', () => {
    const searchInput = controls.find('input');


    searchInput.simulate('change', { target: { value: 'col'}});
    controls.find('input').simulate('change');
    expect(controls.find('.sesrch-input')).to.equal("col");
  });
});
