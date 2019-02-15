import React from 'react';

// Set up some sort of component that pops up with student info after picking student

const StudentCard = ({ onClose, data: { id, name, profilePic, lastCalled, timesCalled }  }) => (
  <div className = 'student-card' key={id}>
      <div className = 'card-name'>{name[0]} {name[1]}</div>
      <img className = 'card-profile' src={profilePic}></img>
      <p>Last Called: {new Date(lastCalled).toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short',
                        hour: 'numeric',
                        minute: 'numeric' 
                      })} </p>
      <p>Times Called: {timesCalled}</p>
    {(onClose) ? <button onClick = { onClose }> Back </button> : null}
  </div>
)

export default StudentCard;