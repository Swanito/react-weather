import React from 'react'
import DayWeather from './DayWeather';

export default function NextWeathers(props) {

    const { days } = props;

    return (
        <div>
          {days.map((day) => {
            return <DayWeather day={day} />;
          })}
      </div>
    )
}
