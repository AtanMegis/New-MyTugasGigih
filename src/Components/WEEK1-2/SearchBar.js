import React, { Component }  from 'react';
import "./SearchBar.css"

const SearchBar = () => {
    return(
        <form className='search-form' action="/search">
        <input className='search-input' placeholder="Search" required/>
        <button className='search-btn' type="submit">Search</button>
    
        </form>
        )
};
export default SearchBar;
