import axios from 'axios';


import API_KEY from '../../apikey'; 
const ROOT_URL `api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;      


export const FETCH_WEATHER = 'FETCH_WEATHER';

// this is an action creator
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  // action creators allways have a type
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}