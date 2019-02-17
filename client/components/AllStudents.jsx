import React from 'react';
import propTypes from 'prop-types';

import StudentCard from './StudentCard.jsx';
import Search from './Search.jsx';
import SortSelector from './SortSelector.jsx';

// Component to display all student data to be scrolled through
// Could also allow for manual selection of students? Doubt it would ever be used, but it'd be nice to have the option I guess.

// To Do:
//Should make everything in floating container into it's own component

const AllStudents = ({ search, onClose, items, next }) => (
  <div className = "all-container">
    <div className = "floating-container">
      <Search search={search}/>
      <i className={["fas fa-home", "btn-fixed"].join(' ')} onClick={onClose}></i>
      {/* <button className="btn-fixed" onClick={onClose}>Home</button>  */}
      <i className={["fas fa-arrow-circle-right", "btn-next"].join(' ')} onClick={next}></i>
    </div>
    <SortSelector />
      {items.map(item => <StudentCard data={item} key={item.id}/> )}
    {/* <button className="btn-next" onClick={next}>Show Next 10</button> */}
  </div>
)


AllStudents.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
    lastCalled: propTypes.string.isRequired,
    timesCalled: propTypes.number.isRequired
  })),
  next: propTypes.func,
  onClose: propTypes.func,
  search: propTypes.func
};

export default AllStudents