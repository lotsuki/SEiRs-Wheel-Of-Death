import React from 'react';
import propTypes from 'prop-types';


// TO DO
// Wrap student card in div, move button to outside div and change to home icon
// Center student card?
// Time to start prettying up this app

const StudentCard = ({ data: { name, profilePic, lastCalled, timesCalled }  }) => (
  <ul className = 'student-card'>
      <div className = 'card-name'>{name}</div>
      <img className = 'card-profile' src={profilePic}></img>
      <p>Last Called: {new Date(lastCalled).toLocaleDateString('en-US', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short', 
                      })} </p>
      <p>Times Called: {timesCalled}</p>
  </ul>
);

StudentCard.propTypes = {
  data: propTypes.shape({
    name: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
    lastCalled: propTypes.string.isRequired,
    timesCalled: propTypes.number.isRequired
  })
};

export default StudentCard;