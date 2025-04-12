import React from 'react';
import Searchbar from './Searchbar';
import Temp from './Temp';

const Sidebar = ({ search, setSearch, weatherData }) => {
  return (
    <div
      className="
        w-full 
        sm:w-2/5 
        md:w-1/3 
        lg:w-1/4 
        h-screen 
        bg-white/10 
        backdrop-blur-md 
        rounded-2xl 
        shadow-lg 
        p-4 
        flex 
        flex-col 
        gap-4
      "
    >
      <Searchbar search={search} setSearch={setSearch} />
      <Temp weatherData={weatherData} />
    </div>
  );
};

export default Sidebar;
