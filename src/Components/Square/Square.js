import React from 'react';
import './Square.css'

export default function Square (props) {
    return (
        <div className = 'square' style={{
            height: props.height,
            width: props.width,
        }}>
            <p className = 'square-text'>
                {props.children}
            </p>            
        </div>
    )
}