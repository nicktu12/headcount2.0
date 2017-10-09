import React, { Component } from 'react';
import Card from '../Card/Card';
import ComparedCard from '../ComparedCard/ComparedCard';
import PropTypes from 'prop-types';

class CompareContainer extends Component {

  shouldComponentUpdate(nextProps, nextState){
    const schoolsSelected = this.props.schoolsSelected;
    return schoolsSelected[0] !== nextProps.schoolsSelected[1]
    && schoolsSelected !== undefined;
  }

  render(){
    const schoolsSelected = this.props.schoolsSelected;
    const array = this.props.selectedCards(schoolsSelected);

    return (
      <div>
        <div className="compare-container">
          {array.map((singleData, index)=>{
            return (
              <Card
                schoolsSelected={schoolsSelected}
                location={singleData.location}
                dataNode={singleData.data}
                key={index}
                handleClick={this.props.handleCompareClick}
                numberOfSelected={this.props.numberOfSelected}
              />
            );
          })}
        </div>
        <div>
          <ComparedCard
            compareData={this.props.compareData}
            schoolsSelected={schoolsSelected}
            selectedCards={this.props.selectedCards}
          />
        </div>
      </div>
    );
  }
}

CompareContainer.propTypes = {
  selectedCards: PropTypes.func,
  schoolsSelected: PropTypes.array,
  numberOfSelected: PropTypes.number,
  handleClick: PropTypes.func,
  compareData: PropTypes.func,
  handleCompareClick: PropTypes.func
};

export default CompareContainer;
