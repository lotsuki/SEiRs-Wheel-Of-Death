import React from 'react';

// Set up some sort of component that pops up with student info after picking student

const StudentCard = ({ onClose, data: { name, profilePic, lastCalled, timesCalled }  }) => (
  <div className = 'student-card'>
      <div className = 'card-name'>{name[0]} {name[1]}</div>
      <img className = 'card-profile' src={profilePic}></img>
      <p>Last Called: {lastCalled}</p>
      <p>Times Called: {timesCalled}</p>
    <button onClick = { onClose }> Back </button>
  </div>
)

export default StudentCard;