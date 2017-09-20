import React from 'react';
import './Square.css'

export default function Square (props) {
    return (
        <div className = 'square'>
            <p className = 'square-text'>
                {props.children}
            </p>            
        </div>
    )
}