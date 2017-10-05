import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const ComparedCard = ({ comparedDataFunction, schoolsSelected, selectedCards }) => {
  // console.log(props);
  return (
    <div className="compare-container">

      {console.log(selectedCards(schoolsSelected))}
      {comparedDataFunction(selectedCards(schoolsSelected))}

    </div>
  );
};

ComparedCard.propTypes = {
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default ComparedCard;
