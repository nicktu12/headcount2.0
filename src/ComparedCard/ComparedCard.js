import React from 'react';
import PropTypes from 'prop-types';

const ComparedCard = ({ compareData, schoolsSelected, selectedCards }) => {

  return (
    <div className="compared-cards">
      {
        compareData(selectedCards(schoolsSelected)) &&
        <div>
          District Comparison: &nbsp;
          {compareData(selectedCards(schoolsSelected)).compared * 100} %
        </div>
      }
    </div>
  );
};

ComparedCard.propTypes = {
  selectedCards: PropTypes.func,
  compareData: PropTypes.func,
  schoolsSelected: PropTypes.array
};

export default ComparedCard;
