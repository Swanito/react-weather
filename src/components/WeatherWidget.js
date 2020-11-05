import React from 'react';
import CurrentWeather from './CurrentWeather';
import NextWeathers from './NextWeathers';
import WeatherCard from './WeatherCard';

export default function WeatherWidget(props) {
  const { title, consolidated_weather } = props;
  const todaysWeather = consolidated_weather[0];

  const days = consolidated_weather.map((day) => {
    day.weekday = new Date(day.applicable_date).toLocaleString('es-ES', {
        weekday: 'long',
      });
    return day
  });
 
  return (
    <WeatherCard>
        <CurrentWeather title={title} {...todaysWeather} />
        <NextWeathers days={days} />
    </WeatherCard>
  );
}
