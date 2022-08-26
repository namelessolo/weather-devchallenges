import SearchPlacesButton from '../../atoms/SearchPlacesButton/SearchPlacesButton';
import LocationButton from '../../atoms/LocationButton/LocationButton';
import CurrentWeatherData from '../../organisms/CurrentWeatherData/CurrentWeatherData';
import Menu from '../Menu/Menu';
import { useAppSelector } from '../../../store/hooks';

const CurrentWeather = () => {
  const menu = useAppSelector((state) => state.weather.menu);

  return (
    <div className='bg-front h-screen text-white px-3 pt-5 min-h-[820px]'>
      <div className='bg-front text-white px-3 pt-5'>
        {menu ? (
          <Menu />
        ) : (
          <>
            <div className='flex justify-between items-center'>
              <SearchPlacesButton />
              <LocationButton />
            </div>
            <CurrentWeatherData />
          </>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
