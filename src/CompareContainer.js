import React from 'react';
import Card from './Card';
import ComparedCard from './ComparedCard';
import PropTypes from 'prop-types';

const CompareContainer = (props) => {
  const array = props.selectedCards(props.schoolsSelected)
  console.log(array);

  return (
    <div className="compare-container">
      {array.map((singleData, index)=>{
        return (
          <Card
            location={singleData.location}
            dataNode={singleData.data}
            key={index}
            handleClick={props.handleClick}
            numberOfSelected={props.numberOfSelected}
          />
        );
      })}
    </div>
  );
};

CompareContainer.propTypes = {
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default CompareContainer;
