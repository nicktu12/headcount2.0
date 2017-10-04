import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  let keys = Object.keys(props.dataNode);

  return (
    <div className="card"
      onClick={props.handleClick}>
      <h1 className="card-header">
        {props.location}
      </h1>
      <div>
        {
          keys.map((key, index)=>{
            let conditionalClass;
            props.dataNode[key] < .5
              ? conditionalClass="less-than-half"
              : conditionalClass="more-than-half";
            return (
              <div className="p-container"
                key={setTimeout(Date.now(), 500)}>
                <p className={conditionalClass}>
                  {key}: {props.dataNode[key]}
                </p>
              </div>
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
