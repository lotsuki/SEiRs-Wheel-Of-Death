import React from 'react';
import propTypes from 'prop-types';

import { magGlass, clear } from '../symbols.jsx'; 

const Search = ({ search }) => (
  <form className="search-form">
    <input type="text" placeholder="Search Students" onChange={search}></input>
  </form>
)

Search.propTypes = {
  onChange: propTypes.func.isRequired
}

export default Search;