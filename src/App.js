import React, {Component} from 'react';
import Helper from './helper';
import CardContainer from './CardContainer';
import kinderData from '../data/kindergartners_in_full_day_program';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.helper = new Helper(kinderData);

    this.state = {
      school: null,
      years: [],
      inputValue: ""
    };

    // Bind
    this.onChange = this.onChange.bind(this);

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

  render() {
    return (
      <div>
        <input
          type="text"
          value={ this.state.inputValue }
          onChange={this.onChange}
        />
        <h1>{this.state.school
          ? this.state.school.location
          : ""}</h1>
        {this.state.years.map((year, index) => {
          return (
            <h2 key={ index }>{ year }</h2>
          );
        })}
        <CardContainer formattedData={this.helper} />
      </div>

    );
  }
}

export default App;
