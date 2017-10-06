import React from 'react';
import Card from './Card';
import ComparedCard from './ComparedCard';
import PropTypes from 'prop-types';

const CompareContainer = (props) => {
  const array = props.selectedCards(props.schoolsSelected);

  return (
    <div>
      <div className="compare-container">
        {array.map((singleData, index)=>{
          return (
            <Card
              location={singleData.location}
              dataNode={singleData.data}
              key={index}
              handleClick={props.handleCompareClick}
              numberOfSelected={props.numberOfSelected}
              // cardAverage={}
            />
          );
        })}
      </div>
      <div>
        <ComparedCard
          comparedDataFunction={props.comparedDataFunction}
          schoolsSelected={props.schoolsSelected}
          selectedCards={props.selectedCards}
        />
      </div>
    </div>
  );
};

CompareContainer.propTypes = {
  selectedCards: PropTypes.func,
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number,
  handleClick: PropTypes.func,
  comparedDataFunction: PropTypes.func,
  handleCompareClick: PropTypes.func
};

export default CompareContainer;
