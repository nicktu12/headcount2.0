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

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        newProps: nextProps
      }
    )
  }

  clickCard() {
    console.log(this.props.numberOfSelected);
    if (this.props.numberOfSelected < 1) {
      this.setState({
        active: !this.state.active
      });

    }
    this.props.handleClick(this.props.location);
  }

  render() {
    let dataNode = this.props.dataNode;
    let keysArray = Object.keys(dataNode);
    let average = 0;

    return (
      <button
        className={this.state.active ? "card active" : "card"}
        onClick={this.clickCard}>
        <h1 className="card-header">
          {this.props.location}
        </h1>
        <div>
          {
            keysArray.map((key, index)=>{
              average += dataNode[key];
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
          <div>
            <p className="district-average">
              District Average: &nbsp;
              {
                Math.round((average / keysArray.length) * 1000) / 1000
              }
            </p>
          </div>
        </div>
      </button>
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
