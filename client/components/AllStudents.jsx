import React from 'react';

import StudentCard from './StudentCard.jsx'

// Component to display all student data to be scrolled through
// Maybe allow for manual editing of student data?
// Could also allow for manual selection of students? Doubt it would ever be used, but it'd be nice to have the option I guess.

const AllStudents = ({ items, onClose }) => (
  <div className = "all-container">
      {items.map(item => <StudentCard data={item} onClose={onClose}/> )}
  </div>
)

export default AllStudents