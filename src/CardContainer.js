import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  let array = props.formattedData.kinderData;

  return (
    <div className="card-container">
      {array.map((singleData, index)=>{
        return (
          <Card location={singleData.location}
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
  formattedData: PropTypes.objectOf(PropTypes.array),
  numberOfSelected: PropTypes.number
};

export default CardContainer;
