import React from 'react';

export default function Box(props) {
    return (
        <div
            style={{
                width: props.width + 'px',
                height: '300px',
                backgroundColor: props.color,
                borderRadius: '2px',
                transition: 'all ease .5s'
            }}
        />
    )
}