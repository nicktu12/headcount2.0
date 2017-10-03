import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  let keys = Object.keys(props.dataNode);

  return (
    <div className="card">
      <h1 className="card-header">
        {props.location}
      </h1>
      <p>
        {
          keys.map((key)=>{
            return (
              <div className="p-container">
                <p>{key}: {props.dataNode[key]}</p>
              </div>
            )
          })
        }
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.objectOf(PropTypes.number),
  location: PropTypes.string
};

export default Card;
