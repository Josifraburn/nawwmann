import React from 'react';
import Square from '../Components/Square/Square'
import './SquareContainer.css'
import {Link} from 'react-router-dom'
import Transition from 'react-transition-group/Transition';

export default function ShopContainer () {
    return (
        <div className = 'square-container'>
            <Link to='style' style={{ textDecoration: 'none' }} className='link-style'>
                <Square> S </Square>
            </Link>
            <Link to='style' style={{ textDecoration: 'none' }} className='link-style'>
                <Square> M </Square>
            </Link>
            <Link to='style' style={{ textDecoration: 'none' }} className='link-style'>                      
                <Square> L </Square>
            </Link>
        </div>
    )
}

