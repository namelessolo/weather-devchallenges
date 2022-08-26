import { ImLocation } from 'react-icons/im';
import CurrentWeatherImage from '../../atoms/CurrentWeatherImage/CurrentWeatherImage';

const CurrentWeatherData = () => {
  return (
    <>
      <CurrentWeatherImage />
      <div className='flex flex-col items-center'>
        <p className='text-9xl mb-6'>15°C</p>
        <p className='text-4xl text-gray mb-12'>Shower</p>
        <p className='text-lg text-gray mb-8'>Today · Fri, 5 Jun</p>
        <p className='text-lg text-gray flex items-center gap-3'>
          <ImLocation /> Helsinki
        </p>
      </div>
    </>
  );
};

export default CurrentWeatherData;
