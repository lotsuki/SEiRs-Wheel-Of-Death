import React from 'react';
import propTypes from 'prop-types';
import ReactFileReader from 'react-file-reader';



const Navigation = ({ pickRandom, pickLeast, viewAll, handleFiles }) => (
  <div>
    <ul className="navigation-main">
      <li className="button-row"  onClick={pickRandom}>
        <i className={["fas fa-user-graduate", "navigation-item"].join(' ')}></i>
        Pick Random Student
      </li>
      <li className="button-row" onClick={pickLeast}>
        <i className={["fas fa-user-clock", "navigation-item"].join(' ')}></i>
        Pick Uncalled Student
      </li>
      <li className="button-row" onClick={viewAll}>
        <i className={["fas fa-users", "navigation-item"].join(' ')}></i>
        See All Students
      </li>
    </ul>
    <div className="navigation-other">
      <ReactFileReader handleFiles={handleFiles} fileTypes={[".csv", ".tsv",]}>
        <button className='btn'>Upload New Class</button>
      </ReactFileReader>
    </div>
  </div>
);

Navigation.propTypes = {
  pickRandom: propTypes.func.isRequired,
  pickLeast: propTypes.func.isRequired,
  viewAll: propTypes.func.isRequired,
  handleFiles: propTypes.func.isRequired
};

export default Navigation;