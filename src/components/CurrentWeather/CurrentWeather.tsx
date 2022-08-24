import SearchPlacesButton from '../atoms/SearchPlacesButton/SearchPlacesButton';
import LocationButton from '../atoms/LocationButton/LocationButton';
import CurrentWeatherImage from '../atoms/CurrentWeatherImage/CurrentWeatherImage';

const CurrentWeather = () => {
  return (
    <div className='bg-front h-screen text-white px-3 pt-5'>
      <div className='flex justify-between items-center'>
        <SearchPlacesButton />
        <LocationButton />
      </div>
      <CurrentWeatherImage />
    </div>
  );
};

export default CurrentWeather;
