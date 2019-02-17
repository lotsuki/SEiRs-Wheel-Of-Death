import React from 'react';
import propTypes from 'prop-types';


const Navigation = ({ pickRandom, pickLeast, viewAll }) => (
  <div>
  <button className="btn-random" onClick={pickRandom}>Test Random Student</button>
  <button className="btn-least" onClick={pickLeast}>Test Least Picked Student</button>
  <button className="btn-all" onClick={viewAll}>Test See All Students</button>
</div>
);

Navigation.propTypes = {
  pickRandom: propTypes.func.isRequired,
  pickLeast: propTypes.func.isRequired,
  viewAll: propTypes.func.isRequired
}

export default Navigation;