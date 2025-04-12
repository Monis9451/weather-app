import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

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
  Tornado: faTornado
}


const Temp = ({weatherData}) => {
  if(!weatherData) return null;
  return (
    <div>
        <div className='text-3xl flex justify-center overflow-hidden'>
            {weatherData.weather[0].description}&nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={weatherIconMap[weatherData.weather[0].main] || faSun} className='white'/>
        </div>
        <br />
        <div className='bg-white/9 h-0.5 w-70 absolute left-7'></div>
        <br />
        <div className='absolute left-10 flex items-center gap-30'>
            Feels like 
            <span className='flex items-center gap-1'>
                {Number.parseInt(weatherData.main.feels_like-273.15)}&nbsp;°C&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='white'/>
            </span>
        </div>
        <br />
        <br />
        <div className='absolute left-10 flex items-center gap-30'>
            Humidity 
            <span className='flex items-center gap-1'>
                {weatherData.main.humidity}&nbsp;%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faDroplet} className='white'/>    
            </span>
        </div>
        <br />
        <br />
        <div className='absolute left-10 flex items-center gap-24'>
            Wind Speed
            <span className='flex items-center gap-1'>
                {weatherData.wind.speed}&nbsp;m/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faWind} className='white'/>
            </span>
        </div>
        <br />
        <br />
        <div className='absolute left-10 flex items-center gap-30'>
            Visibility 
            <span className='flex items-center gap-1'>
                {Number.parseInt(weatherData.visibility/1000)}&nbsp;km&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faEye} className='white'/>
            </span>
        </div>
        <br />
        <br />
        <div className='bg-white/9 h-0.5 w-70 absolute left-7'></div>
    </div>
  )
}

export default Temp