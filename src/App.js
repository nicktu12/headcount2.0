import React, {Component} from 'react';
import Helper from './helper';
import CardContainer from './CardContainer';
import CompareContainer from './CompareContainer';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.helper = new Helper(kinderData);

    this.state = {
      school: null,
      years: [],
      inputValue: "",
      numberOfSelected: 0,
      schoolsSelected: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
    this.setState({ inputValue: event.target.value });
    //this should happen on submit
    let school = this.helper.findByName(event.target.value);

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

  handleClick(location){
    this.setState({
      numberOfSelected: this.state.numberOfSelected + 1,
      schoolsSelected: this.state.schoolsSelected.concat(location)
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

    // lifecycle method???

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
          comparedDataFunction={this.comparedCardAverages.bind(this)}
        />
        <CardContainer
          formattedData={this.helper}
          handleClick={this.handleClick}
          numberOfSelected={this.state.numberOfSelected}
          cardAverages={this.cardAverages}
        />
      </div>

    );
  }
}

export default App;
