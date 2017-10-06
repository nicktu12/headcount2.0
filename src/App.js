import React, {Component} from 'react';
import Helper from './helper';
import CardContainer from './CardContainer';
import CompareContainer from './CompareContainer';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.helper = new Helper(kinderData);
    this.kinderData =  this.helper.kinderData;
    this.state = {
      school: null,
      years: [],
      inputValue: "",
      numberOfSelected: 0,
      schoolsSelected: [],
      possibleMatches: []
    };

    this.onFindClick = this.onFindClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCompareClick = this.handleCompareClick.bind(this);
    this.comparedCardAverages = this.comparedCardAverages.bind(this);
  }

  onFindClick(event) {
    let school = this.helper.findByName(this.state.inputValue);

    if (typeof school === 'object') {
      let years = [];

      for (let year in school.data) {
        if (typeof year === 'string') {
          years.push(school.data[year]);
        }
      }
      this.setState({ school: school, years: years });
    }
  }

  onChange(event) {
    let val = event.target.value;
    this.setState({
      inputValue: val,
      possibleMatches: val ? this.helper.findAllMatches(val) : []
    });

  }

  handleClick(location){
    if (this.state.numberOfSelected < 2) {
      this.setState({
        numberOfSelected: this.state.numberOfSelected + 1,
        schoolsSelected: this.state.schoolsSelected.concat(location)
      });
    }
  }

  handleCompareClick(location) {
    let removeSchool = this.state.schoolsSelected.filter((school) => {
      return location !== school;
    });
    this.setState({
      numberOfSelected: this.state.numberOfSelected - 1,
      schoolsSelected: removeSchool

    });
  }

  selectedCards(schools) {
    return schools.map((school) => {
      return this.helper.findByName(school);
    });
  }

  cardAverages(schoolName) {
    this.helper.findAverage(schoolName, true);
  }

  // this.helper.findAvereage
  // this.helper.compareDistrictAverages
  // schools is array of two objects w school data

  comparedCardAverages(schools) {

    const array = schools.map((school)=>{
      return school.location;
    });

    if (array.length === 2) {
      return this.helper.compareDistrictAverages(array[0], array[1]);
    }

    // this.helper.compareDistrictAverages(array[0], array[1])

  }

  render() {
    return (
      <div className="app-render">
        <input
          className="search-input"
          placeholder="Search for School Here"
          type="text"
          value={ this.state.inputValue }
          onChange={this.onChange}
        />
        <ul>
          {this.state.possibleMatches.map((location, index) => {
            return (
              <li className="search-list" key={index}>{location.location}</li>
            );
          })}
        </ul>
        <button
          className="findButton"
          onClick={this.onFindClick}
        >
          Find
        </button>
        <h1>{this.state.school
          ? this.state.school.location
          : ""}
        </h1>
        {this.state.years.map((year, index) => {
          return (
            <h2 key={ index }>{ year }</h2>
          );
        })}
        <CompareContainer
          handleClick={this.handleClick}
          selectedCards={this.selectedCards.bind(this)}
          schoolsSelected={this.state.schoolsSelected}
          comparedDataFunction={this.comparedCardAverages}
          handleCompareClick={this.handleCompareClick}
        />
        <CardContainer
          kinderData={this.kinderData}
          handleClick={this.handleClick}
          numberOfSelected={this.state.numberOfSelected}
          // cardAverages={this.cardAverages}
        />
      </div>

    );
  }
}

export default App;
