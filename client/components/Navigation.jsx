import React from 'react';
import propTypes from 'prop-types';
import ReactFileReader from 'react-file-reader';



const Navigation = ({ pickRandom, pickLeast, viewAll, handleFiles }) => (
  <div>
    <div className="navigation-main">
      <button className="btn-random" onClick={pickRandom}>Pick Random Student</button>
      <button className="btn-least" onClick={pickLeast}>Pick Uncalled Student</button>
      <button className="btn-all" onClick={viewAll}>See All Students</button>
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