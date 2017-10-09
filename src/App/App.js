import React, {Component} from 'react';
import Helper from '../helper';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import Controls from '../Controls/Controls';
import kinderData from '../../data/kindergartners_in_full_day_program';
import hsGradRatesData from '../../data/high_school_graduation_rates';
import thirdGradeTestData from '../../data/3rd_grade_tests';
import eighthGradeTestData from '../../data/8th_grade_test_scores';
import medianIncomeData from '../../data/median_household_income';
import onlineEnrollmentData from '../../data/online_pupil_enrollment';
import pupilEnrollmentData from '../../data/pupil_enrollment';
import remediationData from '../../data/remediation_in_higher_education';
import povertyData from '../../data/school_aged_children_in_poverty';
import specEdData from '../../data/special_education';
import titleIData from '../../data/title_i_students';

class App extends Component {
  constructor() {
    super();

    this.helper = new Helper(kinderData);
    this.kinderData =  this.helper.kinderData;
    this.state = {
      school: null,
      years: [],
      numberOfSelected: 0,
      schoolsSelected: [],
      dataSet: (new Helper(kinderData)).kinderData,
      dataArray: [
        {name: "HS Graduation Rates", districtData: hsGradRatesData},
        {name: "Kindergartens in Full Day Program", districtData: kinderData},
        {name: "Grade 3 Test Data", districtData: thirdGradeTestData},
        {name: "Grade 8 Test Data", districtData: eighthGradeTestData},
        {name: "Median Household Income", districtData: medianIncomeData},
        {name: "Online Enrollment", districtData: onlineEnrollmentData},
        {name: "Pupil Enrollment", districtData: pupilEnrollmentData},
        {name: "Remediation in Higher Education", districtData:remediationData},
        {name: "School Aged Children in Poverty", districtData: povertyData},
        {name: "Special Education Data", districtData: specEdData},
        {name: "Title I Students", districtData: titleIData}
      ]
    };

    this.handleClick          = this.handleClick.bind(this);
    this.handleCompareClick   = this.handleCompareClick.bind(this);
    this.comparedCardAverages = this.comparedCardAverages.bind(this);
    this.changeDataSet        = this.changeDataSet.bind(this);
    this.selectedCards        = this.selectedCards.bind(this);
  }

  handleClick(location){
    const numSelected = this.state.numberOfSelected;
    let schoolIndex = this.state.schoolsSelected.indexOf(location);

    if (numSelected < 2 && schoolIndex === -1){
      this.setState({
        numberOfSelected: numSelected + 1,
        schoolsSelected: this.state.schoolsSelected.concat(location)
      });

    } else if (schoolIndex !== -1) {
      this.setState({
        schoolsSelected: this.state.schoolsSelected.filter((school) => {
          return school !== location;
        }),
        numberOfSelected: numSelected - 1
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

  comparedCardAverages(schools) {
    const array = schools.map((school)=>{
      return school.location;
    });
    if (array.length === 2) {
      return this.helper.compareDistrictAverages(array[0], array[1]);
    }
  }

  changeDataSet(dataSet) {
    this.helper     = new Helper(dataSet);
    this.kinderData = this.helper.kinderData;
    this.setState(
      {
        dataSet: (new Helper(dataSet)).kinderData
      }
    );
  }

  render() {
    return (
      <div className="app-render">
        <Controls
          dataArray={this.state.dataArray}
          changeDataSet={this.changeDataSet}
          onChange={this.onChange}
          helper={this.helper}
          handleClick={this.handleClick}
        />
        <CompareContainer
          selectedCards={this.selectedCards}
          schoolsSelected={this.state.schoolsSelected}
          compareData={this.comparedCardAverages}
          handleCompareClick={this.handleCompareClick}
        />
        <CardContainer
          schoolsSelected={this.state.schoolsSelected}
          kinderData={this.state.dataSet}
          handleClick={this.handleClick}
          numberOfSelected={this.state.numberOfSelected}
        />
      </div>
    );
  }
}

export default App;
