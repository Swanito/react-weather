import React from 'react'
import './WeatherCard.css';

export default function WeatherCard(props) {
    return (
        <div className="card">
            {props.children}
        </div>
    )
}
