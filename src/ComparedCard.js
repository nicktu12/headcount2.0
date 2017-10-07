import React from 'react';
// import Card from './Card';
import PropTypes from 'prop-types';

const ComparedCard = (props) => {


  return (
    <div>
      <div className="compared-cards">
        {
          props.compareData(props.selectedCards(props.schoolsSelected)) &&
          props.compareData(props.selectedCards(props.schoolsSelected)).compared
        }
      </div>
      <button>
        Clear Comparison
      </button>
    </div>
  );
};

ComparedCard.propTypes = {
  selectedCards: PropTypes.func,
  compareData: PropTypes.func,
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default ComparedCard;
