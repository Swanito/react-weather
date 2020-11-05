import React from 'react';
import './CurrentWeather.css';

export default function CurrentWeather(props) {
  const { title, weather_state_name, the_temp, max_temp, min_temp } = props;

  return (
    <div className="current-weather margin-bottom">
      <div className="item">
        <h2>{title}</h2>
        <h6>{weather_state_name}</h6>
        <h1>{Number(the_temp.toFixed(1))}°</h1>
        <span>Máx. {Number(max_temp.toFixed(1))}°</span>
        <span> - </span>
        <span>Min. {Number(min_temp.toFixed(1))}°</span>
      </div>
    </div>
  );
}
