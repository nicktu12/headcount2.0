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
            let conditionalClass;
            props.dataNode[key] < .5 ? conditionalClass = "less-than-half" : conditionalClass = "more-than-half"
            return (
              <div className="p-container">
                <p className={conditionalClass}>
                  {key}: {props.dataNode[key]}
                </p>
              </div>
            );
          })
        }
      </p>
    </div>
  );
};

Card.propTypes = {
  dataNode: PropTypes.objectOf(PropTypes.number),
  location: PropTypes.string
};

export default Card;
