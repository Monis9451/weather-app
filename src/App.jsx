import React from 'react';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { preLoadImages } from './utils/preLoadImages';
import Text from './components/Text'

// Weather API URL
const IP_URL = 'https://ipwhois.app/json/';
const URL_OPTIONS = {
  method:'GET',
  headers:{
    accept:'application/json',
  },
};

// Weather background images
const weatherBgMap = {
  Clear: "clear",
  Clouds: "clouds",
  Rain: "rain",
  Thunderstorm: "thunderstorm",
  Drizzle: "drizzle",
  Snow: "snow",
  Mist: "mist",
  Fog: "fog",
  Smoke: "smoke",
  Haze: "haze",
  Dust: "dust",
  Sand: "sand",
  Ash: "ash",
  Squall: "squall",
  Tornado: "tornado"
};


const App = () => {
  // useStates
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [bgImage, setBgImage] = useState('');
  
  //Functions
  const fetchAPI = async ()=>{
    try {
      const response = await fetch(IP_URL, URL_OPTIONS);
      if(!response.ok){
        throw new Error('Failed to fetch IP address');
      };
      const data = await response.json();
      const ipCity = data.city;
      fetchWeather(ipCity);

    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  }

  const fetchWeather = async (query) =>{
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`, URL_OPTIONS);
      if(!response.ok){
        throw new Error('Failed to fetch weather data');
      };
      const data = await response.json();
      setWeatherData(data);
      setBgImage(weatherBgMap[data.weather[0].main] || 'clear');
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  //useEffects
  useEffect(() =>{
    fetchAPI();
  }, [])

  useEffect(() =>{  
    if (search.trim())
    {
      fetchWeather(search);
    };
  }, [search]);

  useEffect(() => {
    preLoadImages([
      'clear', 'clouds', 'rain', 'thunderstorm', 'drizzle',
      'snow', 'mist', 'fog', 'smoke', 'haze', 'dust',
      'sand', 'ash', 'squall', 'tornado'
    ]);
  }, []);

  //React Components
  return (
    <div className="min-h-screen w-full px-4 py-6 md:px-8 lg:px-16 bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(/${bgImage}.jpg)` }}>
      <Sidebar search={search} setSearch={setSearch} weatherData={weatherData}/>
      <Text weatherData={weatherData}/>
    </div>
  )
}

export default App