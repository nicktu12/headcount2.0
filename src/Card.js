import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props, context) {
    super(props, context);
    this.state= {
      active: false
    };

    this.clickCard = this.clickCard.bind(this);
  }

  clickCard() {
    if (this.props.numberOfSelected < 2) {
      this.setState({
        active: !this.state.active
      });

      this.props.handleClick(this.props.location);
    }
  }

  render() {
    let dataNode = this.props.dataNode;
    let keysArray = Object.keys(dataNode);

    return (
      <div
        className={this.state.active ? "card active" : "card"}
        onClick={this.clickCard}>
        <h1 className="card-header">
          {this.props.location}
        </h1>
        <div>
          {
            keysArray.map((key, index)=>{
              let conditionalClass;
              dataNode[key] < .5
                ? conditionalClass="less-than-half"
                : conditionalClass="more-than-half";
              return (
                <div className="p-container"
                  key={index}>
                  <p className={conditionalClass}>
                    {key}: {dataNode[key]}
                  </p>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }

}

Card.propTypes = {
  dataNode: PropTypes.objectOf(PropTypes.number),
  location: PropTypes.string,
  handleClick: PropTypes.func,
  numberOfSelected: PropTypes.number
};

export default Card;
