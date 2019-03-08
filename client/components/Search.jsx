import React from 'react';
import propTypes from 'prop-types';

const Search = ({ search }) => (
  <form className="search-form">
    <input className="floating-search" type="text" placeholder="Search Students" onChange={search}></input>
  </form>
)

Search.propTypes = {
  search: propTypes.func.isRequired
}

export default Search;