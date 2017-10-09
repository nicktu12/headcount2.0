import React from 'react';
import PropTypes from 'prop-types';

const SearchList= (props) => {
  return (
    <div>
      <ul className="search-list">
        {props.possibleMatches.map((location, index, event) => {
          return (
            <li
              href="location"
              className="list-items"
              key={index}
            >
              <button
                onClick={() => {
                  props.handleClick(location.location);
                }}
              >{location.location}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

SearchList.propTypes = {
  possibleMatches: PropTypes.arrayOf(PropTypes.object)
};

export default SearchList;
