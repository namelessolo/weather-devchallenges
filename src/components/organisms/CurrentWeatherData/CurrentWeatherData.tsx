import { ImLocation } from 'react-icons/im';
import CurrentWeatherImage from '../../atoms/CurrentWeatherImage/CurrentWeatherImage';
import { useAppSelector } from '../../../store/hooks';

const CurrentWeatherData = () => {
  const currentWeather = useAppSelector((state) => state.weather.weather.currentWeather);
  return (
    <>
      {currentWeather ? (
        <>
          <CurrentWeatherImage />
          <div className='flex flex-col items-center'>
            <p className='text-9xl mb-6'>{Math.round(currentWeather.main.temp)}</p>
            <p className='text-4xl text-gray mb-12 capitalize'>{currentWeather.weather[0].description}</p>
            <p className='text-lg text-gray mb-8'>Today · Fri, 5 Jun</p>
            <p className='text-lg text-gray flex items-center gap-3'>
              <ImLocation /> {currentWeather.name}
            </p>
          </div>
        </>
      ) : (
        <h2 className='text-center text-4xl p-20'>Choose the city</h2>
      )}
    </>
  );
};

export default CurrentWeatherData;
