import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const ComparedCard = ({ comparedDataFunction, schoolsSelected, selectedCards }) => {

  return (
    <div className="compare-container">

      {console.log(comparedDataFunction(selectedCards(schoolsSelected)))}
      {/* {comparedDataFunction(selectedCards(schoolsSelected))} */}

      {
        comparedDataFunction(selectedCards(schoolsSelected)) &&
        comparedDataFunction(selectedCards(schoolsSelected)).compared
      }

    </div>
  );
};

ComparedCard.propTypes = {
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default ComparedCard;
