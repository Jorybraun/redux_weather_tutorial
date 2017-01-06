import axios from 'axios';


import API_KEY from '../../apikey'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;      


export const FETCH_WEATHER = 'FETCH_WEATHER';

// this is an action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  // action creators allways have a type
  return {
    type: FETCH_WEATHER,
    // the payload returns the promise
    payload: request
  };
}