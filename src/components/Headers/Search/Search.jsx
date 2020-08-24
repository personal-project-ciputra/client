import React from 'react';
import './Search.scss'

const Search = () => {
    return (
        <div className='search-container'>
            <input className='input' type="text" name="search" id="search" placeholder='Cari Produk'/>
            <div className="button-container">
            <button className='button'></button>
            </div>
        </div>
    )
}

export default Search
