import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  return (
    <div className="card-container">
      {props.kinderData.map((singleData, index)=>{
        return (
          <Card
            schoolsSelected={props.schoolsSelected}
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


CardContainer.propTypes = {
  kinderData: PropTypes.array.isRequired,
  numberOfSelected: PropTypes.number,
  handleClick: PropTypes.func,
  schoolsSelected: PropTypes.array
};

export default CardContainer;
