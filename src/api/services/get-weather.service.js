import { BASE_URL, LOCATION_SEARCH, LOCATION } from '../constants/environment';

export const weatherService = {
    getWeatherByCoords,
    getWeatherByWoeid,
    getWeatherForDay
}

async function getWeatherByCoords(lat, lon) {
  //https://cors-anywhere.herokuapp.com/ es una api para que funcione la mierda de los cors
  const result = await fetch('https://cors-anywhere.herokuapp.com/' + BASE_URL + LOCATION_SEARCH + `?lattlong=${lat},${lon}`);
  const jsonResult = await result.json();
  return jsonResult[0];
}

async function getWeatherByWoeid(woeid) {
  //https://cors-anywhere.herokuapp.com/ es una api para que funcione la mierda de los cors
  const result = await fetch('https://cors-anywhere.herokuapp.com/' + BASE_URL + LOCATION + `${woeid}`);
  const jsonResult = await result.json();
  return jsonResult;
}

async function getWeatherForDay(woeid, date) {
  //https://cors-anywhere.herokuapp.com/ es una api para que funcione la mierda de los cors
  const result = await fetch('https://cors-anywhere.herokuapp.com/' + BASE_URL + LOCATION + `${woeid}/${date}`);
  const jsonResult = await result.json();
  return jsonResult;
}