import React from 'react'
import HomeRectangle from'../Components/HomeRectangle/HomeRectangle'
import './RectangleContainer.css'
import {Link} from 'react-router-dom'

export default function HomeContainer () {
    return (
        <div className = 'rectangle-container'>
            <Link to='/about' className='home-text'>
                <HomeRectangle> ABOUT </HomeRectangle>
            </Link>
            <Link to='/size' className='home-text'>
                <HomeRectangle> SHOP </HomeRectangle>
            </Link>
        </div>   
    )
}