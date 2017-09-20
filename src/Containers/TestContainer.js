import React from 'react'
import Transition from 'react-transition-group'
import './TestContainer.css'
import Square from '../Components/Square/Square'
import {Link} from 'react-router-dom'







export default function TestContainer () {
    return (
        <div className = 'test-square-container'>
            <Link to='/size'>
                <Square />
            </Link>
        </div>
    )
}