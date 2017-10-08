export default class DistrictRepository {
  constructor(kinderData) {
    this.kinderData = this.formatData(kinderData);
  }

  formatData(kinderData) {
    let uniqueArray = [];
    let returnArray = [];

    kinderData.forEach((dataObj, idx) => {

      if (uniqueArray.indexOf(dataObj.Location) === -1) {
        uniqueArray.push(dataObj.Location);
        returnArray.push(
          {"location": dataObj.Location.toUpperCase(), "data": {}}
        );
      }

      returnArray.forEach((returnObj) => {
        if (returnObj.location.toUpperCase()===dataObj.Location.toUpperCase()) {
          if (isNaN(dataObj.Data)) {
            dataObj.Data = 0;
          }
          returnObj.data[dataObj.TimeFrame]=Math.round(1000*dataObj.Data)/1000;
        }
      });
    });

    return returnArray;
  }

  findByName(inputName) {
    let returnObj;

    if (!inputName) {
      return undefined;
    }

    inputName = inputName.toUpperCase();
    this.kinderData.forEach((dataObj, idx) => {
      if (dataObj.location.toUpperCase() === inputName) {
        returnObj = dataObj;
      }
    });

    return returnObj;
  }

  findAllMatches(inputName) {
    if (inputName) {
      let returnArray = [];

      inputName = inputName.toUpperCase();

      returnArray = this.kinderData.filter((dataObj) => {
        if (dataObj.location.indexOf(inputName) !== -1) {
          return true;
        } else {
          return false;
        }
      });
      return returnArray;
    } else {
      return this.kinderData;
    }
  }

  findAverage(inputName, returnSchoolName) {
    let school = this.findByName(inputName);
    let count = 0;
    let sum = 0;
    for (let year in school.data) {
      if (typeof year === 'string') {
        count++;
        sum += school.data[year];
      }
    }
    if (returnSchoolName) {
      return {
        location: school.location,
        average: Math.round((sum / count) * 1000) / 1000
      };
    } else {
      return Math.round((sum / count) * 1000) / 1000;
    }
  }

  compareDistrictAverages(inputNameOne, inputNameTwo) {

    let schoolOne = this.findAverage(inputNameOne, true);
    let schoolTwo = this.findAverage(inputNameTwo, true);

    let returnObj = {};

    returnObj[schoolOne.location] = schoolOne.average;
    returnObj[schoolTwo.location] = schoolTwo.average;

    // Ask why we are dividing here
    // let comparison = Math.abs(schoolOne.average - schoolTwo.average);

    let comparison = schoolOne.average / schoolTwo.average;
    returnObj.compared = Math.round(comparison * 1000) / 1000;

    return returnObj;

  }

}