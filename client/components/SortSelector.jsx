import React from 'react';

const SortSelector = (props) => (
  <select className="select" > 
    <option value="timesCalled">Times Called</option>
    <option value="name">Name</option>
    <option value="lastCalled">Last Called</option>
  </select>
)

export default SortSelector;