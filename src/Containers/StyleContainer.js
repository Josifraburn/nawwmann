import React from 'react';
import Square from '../Components/Square/Square'
import './SquareContainer.css'

export default function ShopContainer () {
    return (
        <div className = 'square-container'>
            <Square>
                S
            </Square>
            <Square>
                M
            </Square>
            <Square>
                L
            </Square>
        </div>
    )
}