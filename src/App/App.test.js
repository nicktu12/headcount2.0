import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import kinderData from '../../data/kindergartners_in_full_day_program';
import hsGradRatesData from '../../data/high_school_graduation_rates';

describe('App', ()=>{
  it('renders without crashing', () => {
    const renderedComponent = mount(<App />);
  });

  it('should increment number of selected in state when a card is clicked', () => {
    const renderedComponent = mount(<App />);

    expect(renderedComponent.state().numberOfSelected).toEqual(0);
    renderedComponent.instance().handleClick("Colorado");
    expect(renderedComponent.state().numberOfSelected).toEqual(1);
  });

  it('should never have number of select in state exceed 2', () => {
    const renderedComponent = mount(<App />);

    expect(renderedComponent.state().numberOfSelected).toEqual(0);

    renderedComponent.instance().handleClick("Colorado");
    expect(renderedComponent.state().numberOfSelected).toEqual(1);

    renderedComponent.instance().handleClick("Academy 20");
    expect(renderedComponent.state().numberOfSelected).toEqual(2);

    renderedComponent.instance().handleClick("Tacolandiaville");
    expect(renderedComponent.state().numberOfSelected).toEqual(2);
  });

  it('should decrement number of selected in state when a compare card is clicked', () => {
    const renderedComponent = mount(<App />);

    renderedComponent.instance().handleClick("Colorado");
    expect(renderedComponent.state().numberOfSelected).toEqual(1);
    renderedComponent.instance().handleCompareClick("Colorado");
    expect(renderedComponent.state().numberOfSelected).toEqual(0);
  });

  it('should decrement number of selected in state when a compare card is clicked', () => {
    const renderedComponent = mount(<App />);

    const returnObj = renderedComponent.instance().selectedCards(["Colorado"]);
    const expectedResult = [{"data": {"2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, "2014": 0.741}, "location": "COLORADO"}];
    expect(returnObj).toEqual(expectedResult);
  });

  it('should decrement number of selected in state when a compare card is clicked', () => {
    const renderedComponent = mount(<App />);

    const returnObj = renderedComponent.instance().comparedCardAverages(renderedComponent.instance().selectedCards(["Colorado", "Academy 20"]));
    const expectedResult = { COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302 };
    expect(returnObj).toEqual(expectedResult);
  });

  it('should decrement number of selected in state when a compare card is clicked', () => {
    const renderedComponent = mount(<App />);
    const mockData =
      [
        {
          "Location": "Colorado",
          "TimeFrame": 2011,
          "DataFormat": "Number",
          "Data": 16221
        },
        {
          "Location": "Colorado",
          "TimeFrame": 2012,
          "DataFormat": "Number",
          "Data": 16638
        },
        {
          "Location": "Colorado",
          "TimeFrame": 2013,
          "DataFormat": "Number",
          "Data": 16215
        }
    ];
    const cleanData = [{ location: 'COLORADO', data: { '2011': 16221, '2012': 16638, '2013': 16215 } }];

    renderedComponent.instance().changeDataSet(mockData);
    expect(renderedComponent.state().dataSet).toEqual(cleanData);
  });


});
