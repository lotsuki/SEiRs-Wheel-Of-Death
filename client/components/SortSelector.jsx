import React from 'react';

const SortSelector = ({ sortSelect }) => (
  <select className="select" onChange={sortSelect}> 
    <option value="Sort Students">Sort Students</option>
    <option value="timesCalled">Times Called</option>
    <option value="name">Name</option>
    <option value="lastCalled">Last Called</option>
  </select>
)

export default SortSelector;