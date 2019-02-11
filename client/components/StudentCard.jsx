import React from 'react';

// Set up some sort of component that pops up with student info after picking student

const StudentCard = ({ isOpen, onClose, data: { id, name, profilePic, lastCalled, timesCalled }  }) => (
  <div className = 'student-card'>
    {name}
    <button onClick = { onClose }> Back </button>
  </div>

)

export default StudentCard;