import React from 'react';
import propTypes from 'prop-types';
import ReactFileReader from 'react-file-reader';



const Navigation = ({ pickRandom, pickLeast, viewAll, handleFiles }) => (
  <div>
    <div className="navigation-main">
      <div className="random-row"  onClick={pickRandom}>Pick Random Student
        <i className={["fas fa-user-graduate fa-4x", "random"].join(' ')}></i>
      </div>
      <div className="uncalled-row" onClick={pickLeast}>
        <i className="fas fa-user-clock fa-4x"></i>
        Pick Uncalled Student
      </div>
      <div className="all-row" onClick={viewAll}>See All Students
        <i className="fas fa-users fa-4x"></i>
      </div>
    </div>
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