import React from 'react';
import { magGlass, clear } from '../symbols.jsx'; 

const Search = ({ search }) => (
  <form className="search-form">
    <input type="text" placeholder="Search Students" onChange={search}></input>
  </form>
)

export default Search;