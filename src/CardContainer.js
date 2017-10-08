import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class CardContainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      arrayData: this.props.kinderData
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      arrayData: nextProps.kinderData
    });
  }

  render() {
    return (
      <div className="card-container">
        {this.state.arrayData.map((singleData, index)=>{
          return (
            <Card
              location={singleData.location}
              dataNode={singleData.data}
              key={index}
              handleClick={this.props.handleClick}
              numberOfSelected={this.props.numberOfSelected}
              // cardAverages={props.cardAverages}
            />
          );
        })}
      </div>
    );
  }
}

CardContainer.propTypes = {
  // kinderData: PropTypes.array.isRequired,
  numberOfSelected: PropTypes.number,
  handleClick: PropTypes.func,
  cardAverages: PropTypes.func
};

export default CardContainer;
