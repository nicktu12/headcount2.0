import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const ComparedCard = (props) => {
  // console.log(props);
  return (
    <div className="compare-container">
      
      {/* {props.schoolsSelected.map((school, index)=>{
        return (
          <Card
            location={props.school.location}
            // dataNode={this.props.singleData.data}
            key={index}
            // handleClick={this.props.handleClick}
            schoolsSelected={props.schoolsSelected}
            numberOfSelected={props.numberOfSelected}
          />
        );
      })} */}
    </div>
  );
};

ComparedCard.propTypes = {
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number
};

export default ComparedCard;
