import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 0', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findAverage for ACADEMY 20', () => {
    expect(district.findAverage('ACADEMY 20')).toBe(.407);
  });

  test('compareDistrictAverages ACADEMY 20 against YUMA SCHOOL DISTRICT 1', () => {
    const result =  { "ACADEMY 20": 0.407, "YUMA SCHOOL DISTRICT 1": 0.909, "compared": 0.448 }
    expect(district.compareDistrictAverages('ACADEMY 20', 'YUMA SCHOOL DISTRICT 1')).toEqual(result);
  });

  test('compareDistrictAverages is case insensitive', () => {
    const result =  { "ACADEMY 20": 0.407, "YUMA SCHOOL DISTRICT 1": 0.909, "compared": 0.448 }
    expect(district.compareDistrictAverages('ACADeMY 20', 'YUMA ScHOoL DiStRICT 1')).toEqual(result);
  });

  test('compareDistrictAverages ACADEMY 20 against Colorado', () => {
    const result = { "ACADEMY 20": 0.407, "COLORADO": 0.53, "compared": 0.768};
    expect(district.compareDistrictAverages('ACADEMY 20', 'Colorado')).toEqual(result);
  });

  test('formatData to clean up good data', () => {
    const dataSet =
        [
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2008,
            "DataFormat": "Percent",
            "Data": 0.697
          },
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2009,
            "DataFormat": "Percent",
            "Data": 0.691
          },
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2010,
            "DataFormat": "Percent",
            "Data": 0.706
          }
        ];
    const expectedResult = [{"data": {"2008": 0.697, "2009": 0.691, "2010": 0.706}, "location": "COLORADO"}]
    expect(district.formatData(dataSet)).toEqual(expectedResult)
  });

  test('formatData to clean up bad data by inserting zero for value', () => {
    const dataSet =
        [
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2008,
            "DataFormat": "Percent",
            "Data": NaN
          },
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2009,
            "DataFormat": "Percent",
            "Data": 0.691
          },
          {
            "Location": "Colorado",
            "Score": "Math",
            "TimeFrame": 2010,
            "DataFormat": "Percent",
            "Data": NaN
          }
        ];
    const expectedResult = [{"data": {"2008": 0, "2009": 0.691, "2010": 0}, "location": "COLORADO"}];
    
    expect(district.formatData(dataSet)).toEqual(expectedResult);
  });

});
