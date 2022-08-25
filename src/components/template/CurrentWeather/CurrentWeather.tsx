import { useState } from 'react';

import SearchPlacesButton from '../../atoms/SearchPlacesButton/SearchPlacesButton';
import LocationButton from '../../atoms/LocationButton/LocationButton';
import CurrentWeatherImage from '../../atoms/CurrentWeatherImage/CurrentWeatherImage';
import Menu from '../Menu/Menu';

const CurrentWeather = () => {
<<<<<<< HEAD
  const [menu, setMenu] = useState(false);

  return (
    <div className='bg-front h-screen text-white px-3 pt-5 min-h-[820px]'>
=======
  const [menu, setmenu] = useState(false);
  return (
    <div className='bg-front h-screen text-white px-3 pt-5'>
>>>>>>> 99d8770... somethig fucked up with git
      {menu ? (
        <Menu />
      ) : (
        <>
          <div className='flex justify-between items-center'>
            <SearchPlacesButton />
            <LocationButton />
          </div>
          <CurrentWeatherImage />
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
