import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const ComparedCard = ({ comparedDataFunction, schoolsSelected, selectedCards }) => {

  return (
    <div className="compared-cards">
      {
        comparedDataFunction(selectedCards(schoolsSelected)) &&
        comparedDataFunction(selectedCards(schoolsSelected)).compared
      }
    </div>
  );
};

ComparedCard.propTypes = {
  selectedCards: PropTypes.func,
  comparedDataFunction: PropTypes.func,
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default ComparedCard;
