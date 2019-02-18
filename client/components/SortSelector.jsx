import React from 'react';
import propTypes from 'prop-types';

const SortSelector = ({ sortSelect }) => (
  <select className="select" onChange={sortSelect}> 
    <option value="Sort Students">Sort Students</option>
    <option value="timesCalled">Times Called</option>
    <option value="name">Name</option>
    <option value="lastCalled">Last Called</option>
  </select>
);

SortSelector.propTypes = {
  sortSelect: propTypes.func.isRequired
};

export default SortSelector;