import React from 'react';
import propTypes from 'prop-types';
import StudentCard from './StudentCard.jsx';

// Component to display all student data to be scrolled through
// Could also allow for manual selection of students? Doubt it would ever be used, but it'd be nice to have the option I guess.

// To Do:
// Need to limit # of students shown per page, showing 50+ is an expensive operation (400ms render time is too long)
// Implement filtering/sorting options
// Build search component?

const AllStudents = ({ items, onClose }) => (
  <div className = "all-container">
    <button className="btn-fixed" onClick={onClose}>Back</button> 
      {items.map(item => <StudentCard data={item} key={item.id}/> )}
  </div>
);

AllStudents.propTypes = {
  items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.array.isRequired,
    profilePic: propTypes.string.isRequired,
    lastCalled: propTypes.string.isRequired,
    timesCalled: propTypes.number.isRequired
  })),
  onClose: propTypes.func.isRequired
};

export default AllStudents