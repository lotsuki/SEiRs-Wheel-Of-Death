import React from 'react';
import propTypes from 'prop-types';


// Set up some sort of component that pops up with student info after picking student

const StudentCard = ({ onClose, data: { name, profilePic, lastCalled, timesCalled }  }) => (
  <div className = 'student-card'>
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
);

StudentCard.propTypes = {
  data: propTypes.shape({
    name: propTypes.array.isRequired,
    profilePic: propTypes.string.isRequired,
    lastCalled: propTypes.string.isRequired,
    timesCalled: propTypes.number.isRequired
  }),
  onClose: propTypes.func
};

export default StudentCard;