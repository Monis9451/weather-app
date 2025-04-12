import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faWind,
  faEye,
  faSun,
  faCloud,
  faCloudRain,
  faCloudBolt,
  faSnowflake,
  faSmog,
  faTornado,
} from '@fortawesome/free-solid-svg-icons';

const weatherIconMap = {
  Clear: faSun,
  Clouds: faCloud,
  Rain: faCloudRain,
  Thunderstorm: faCloudBolt,
  Drizzle: faCloudRain,
  Snow: faSnowflake,
  Mist: faSmog,
  Fog: faSmog,
  Smoke: faSmog,
  Haze: faSmog,
  Dust: faSun,
  Sand: faSmog,
  Ash: faSmog,
  Squall: faCloud,
  Tornado: faTornado,
};

const Temp = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="w-full px-6 sm:px-10 md:px-16 py-4">
      <div className="text-xl sm:text-2xl md:text-3xl flex justify-center items-center gap-3 mb-4">
        {weatherData.weather[0].description}
        <FontAwesomeIcon icon={weatherIconMap[weatherData.weather[0].main] || faSun} className="text-white text-2xl" />
      </div>

      <div className="border-t border-white/20 my-4 w-full" />

      <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl mb-4">
        <div className="flex items-center gap-2">
          Feels like: {Number.parseInt(weatherData.main.feels_like - 273.15)}°C
        </div>
        <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="text-white text-xl" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl mb-4">
        <div className="flex items-center gap-2">
          Humidity: {weatherData.main.humidity}%
        </div>
        <FontAwesomeIcon icon={faDroplet} className="text-white text-xl" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl mb-4">
        <div className="flex items-center gap-2">
          Wind Speed: {weatherData.wind.speed} m/s
        </div>
        <FontAwesomeIcon icon={faWind} className="text-white text-xl" />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-base sm:text-lg md:text-xl mb-4">
        <div className="flex items-center gap-2">
          Visibility: {Number.parseInt(weatherData.visibility / 1000)} km
        </div>
        <FontAwesomeIcon icon={faEye} className="text-white text-xl" />
      </div>

      <div className="border-t border-white/20 mt-4 w-full" />
    </div>
  );
};

export default Temp;
