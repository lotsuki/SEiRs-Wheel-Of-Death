import React from 'react';

// Set up some sort of component that pops up with student info after picking student

const StudentCard = ({ onClose, data: { name, profilePic, lastCalled, timesCalled }  }) => (
  <ol className = 'student-card'>
    <div className = 'card-body'>
      <div className = 'card-name'>{name[0]} {name[1]}</div>
      <img className = 'card-profile' src={profilePic}></img>
      <p>Last Called: {lastCalled}</p>
      <p>Times Called: {timesCalled}</p>
    </div>
    <button onClick = { onClose }> Back </button>
  </ol>
)

export default StudentCard;