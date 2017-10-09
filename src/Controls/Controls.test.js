import ReactDom from 'react-dom';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Controls from './Controls';
import helper from '../helper';
import config from '../setupTests';
import Adapter from 'enzyme-adapter-react-15';


describe('Controls', ()=>{

  it('should render buttons for each item in the data array', () => {
    const mockFunc = jest.fn();
    const dataArray = [
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
    const controls = shallow(<Controls
      dataArray={dataArray}
      changeDataSet={mockFunc}
      onChange={mockFunc}
      helper={helper}
      handleClick={mockFunc}
    />);
    const conLength = controls.find('.data-button-container').children().length;
    expect(conLength).toEqual(3);
  });

  it('should match snapshot', () => {
    const mockFunc = jest.fn();
    const dataArray = [
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
    const controls = shallow(<Controls
      dataArray={dataArray}
      changeDataSet={mockFunc}
      onChange={mockFunc}
      helper={helper}
      handleClick={mockFunc}
    />);

    expect(controls).toMatchSnapshot();
  });
});
