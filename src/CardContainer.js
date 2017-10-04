import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  let array = props.formattedData.kinderData;

  return (
    <div className="card-container">
      {array.map((singleData)=>{
        return (
          <Card location={singleData.location}
            dataNode={singleData.data}
            key={setTimeout(Date.now(), 500)}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
};

CardContainer.propTypes = {
  formattedData: PropTypes.objectOf(PropTypes.array)
};

export default CardContainer;
