import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const Text = ({weatherData}) => {
  if(!weatherData) return null;
  return (
    <div>
      <div className='bg-white/10 h-1/2 w-1/3 absolute bottom-5 right-25 shadow-lg z-10 rounded-2xl  backdrop-blur-md'>
        <div className='text-7xl z-10 absolute bottom-55 left-5'>
          {Number.parseInt(weatherData.main.temp-273.15)}°C&nbsp;
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='white text-5xl'/>
        </div>
        <div className='text-4xl z-10 absolute bottom-40 left-5 '>
          {weatherData.name}
        </div>
      </div>
    </div>
  )
}

export default Text