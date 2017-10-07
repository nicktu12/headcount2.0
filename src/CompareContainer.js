import React, { Component } from 'react';
import Card from './Card';
import ComparedCard from './ComparedCard';
import PropTypes from 'prop-types';

class CompareContainer extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return this.props.schoolsSelected[0] !== nextProps.schoolsSelected[1]
    && this.props.schoolsSelected !== undefined;
  }

  render(){
    const array = this.props.selectedCards(this.props.schoolsSelected);

    return (
      <div>
        <div className="compare-container">
          {array.map((singleData, index)=>{
            return (
              <Card
                location={singleData.location}
                dataNode={singleData.data}
                key={index}
                handleClick={this.props.handleCompareClick}
                numberOfSelected={this.props.numberOfSelected}
                // cardAverage={}
              />
            );
          })}
        </div>
        <div>
          <ComparedCard
            comparedDataFunction={this.props.comparedDataFunction}
            schoolsSelected={this.props.schoolsSelected}
            selectedCards={this.props.selectedCards}
          />
        </div>
      </div>
    );
  }
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
