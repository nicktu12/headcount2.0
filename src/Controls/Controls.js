import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataButton from '../DataButton/DataButton';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      possibleMatches: []
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let val = event.target.value;
    this.setState({
      inputValue: val,
      possibleMatches: val ? this.props.helper.findAllMatches(val) : []
    });
  }

  render() {
    return (
      <div>
        <div className="data-button-container">
          {this.props.dataArray.map((element, index)=>{
            return (
              <DataButton
                changeDataSet={this.props.changeDataSet}
                dataSet={element.districtData}
                dataName={element.name}
                key={index}
              />
            );
          })}
        </div>
        <p className="welcome">Click on any two districts to compare data</p>
        <input
          className="search-input"
          placeholder="Search for School Here"
          type="text"
          value={ this.state.inputValue }
          onChange={this.onChange}
        />
        <ul className="search-list">
          {this.state.possibleMatches.map((location, index, event) => {
            return (
              <li
                href="location"
                className="list-items"
                key={index}
              >
                <button
                  onClick={() => {
                    this.props.handleClick(location.location);
                  }}
                >{location.location}
                </button>

              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Controls.propTypes = {
  dataArray: PropTypes.arrayOf(PropTypes.object),
  changeDataSet: PropTypes.func,
  handleClick: PropTypes.func,
  helper: PropTypes.object
};

export default Controls;
