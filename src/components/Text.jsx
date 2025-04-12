import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

const Text = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div>
      <div className='bg-white/10 h-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 absolute bottom-5 right-5 shadow-lg z-10 rounded-2xl backdrop-blur-md'>
        
        {/* Temperature */}
        <div className='absolute left-4 bottom-24 text-5xl sm:text-6xl md:text-7xl'>
          {Number.parseInt(weatherData.main.temp - 273.15)}°C&nbsp;
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='text-white text-3xl sm:text-4xl md:text-5xl' />
        </div>

        {/* City name */}
        <div className='absolute left-4 bottom-10 text-2xl sm:text-3xl md:text-4xl'>
          {weatherData.name}
        </div>

      </div>
    </div>
  );
};

export default Text;
