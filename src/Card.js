import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  let keys = Object.keys(props.dataNode);

  return (
    <div>
      <h1>
        {props.location}
      </h1>
      <div>
        {
          keys.map((key)=>{
            return (
              <p>
                {props.dataNode[key]}
              </p>
            );
          })
        }
      </div>
    </div>
  );
};

Card.propTypes = {
  dataNode: PropTypes.objectOf(PropTypes.number),
  location: PropTypes.string
};

export default Card;
