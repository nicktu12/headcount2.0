import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.clickCard = this.clickCard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        newProps: nextProps
      }
    );
  }

  clickCard() {

    this.props.handleClick(this.props.location);
  }

  render(props) {
    let dataNode  = this.props.dataNode;
    let keysArray = Object.keys(dataNode);
    let average   = 0;
    let active    = this.props.schoolsSelected.indexOf(this.props.location) !== -1;
    return (
      <button
        className={active ? "card active" : "card"}
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
  numberOfSelected: PropTypes.number,
  schoolsSelected: PropTypes.array
};

export default Card;
