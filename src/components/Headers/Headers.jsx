import React from 'react'
import Search from './Search/Search'
import Navigation from './Nav/Navigation'
import Carousels from './Carousel/Carousel'
import './Headers.scss'

const Headers = () => {
    return (
        <div className='header-container'>
            <Navigation/>
            <Search/>
        </div>
    )
}

export default Headers
