import { useEffect, useState } from 'react';
import weatherService from './api/services';
import WeatherWidget from './components/WeatherWidget';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  async function getData(lat, lon) {
    const woeidObject = await weatherService.getWeatherByCoords(lat, lon);
    const weather = await weatherService.getWeatherByWoeid(woeidObject.woeid);
    setData(weather);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      getData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  if (data) {
    return (
      <div className="body">
        <WeatherWidget {...data} />
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default App;
