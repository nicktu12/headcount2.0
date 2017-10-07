import React from 'react';
import PropTypes from 'prop-types';

const DataButton = ({ changeDataSet, dataSet, dataName }) => {
  return (
    <div className="data-container">
      <button
        onClick={() => changeDataSet(dataSet)}
      >
        {dataName}
      </button>
    </div>
  );
};

export default DataButton;
