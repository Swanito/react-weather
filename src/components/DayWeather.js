import React from 'react';
import './DayWeather.css';

export default function DayWeather(props) {
  const { day } = props;

  return (
    <div className="day-row">
      <span className="weekday">{day.weekday}</span>
      <img
        src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`}
        width={25}
        height={25}
        alt={day.weather_state_name}
      />
      <div className="temps">
        <span>{Number(day.min_temp.toFixed(1))}°</span>
        <span>-</span>
        <span>{Number(day.max_temp.toFixed(1))}°</span>
      </div>
    </div>
  );
}
