import React from 'react'
import './HomeRectangle.css'
 
export default function HomeRectangle (props){
    return (
            <div className = 'rectangle'>
                <p className = 'home-text'>
                    {props.children}
                </p>
            </div>
    )
} 