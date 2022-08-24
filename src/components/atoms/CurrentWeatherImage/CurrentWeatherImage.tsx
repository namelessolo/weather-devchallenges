import weatherIcon from '../../../assets/LightCloud.png';
import { ImLocation } from 'react-icons/im';

const CurrentWeatherImage = () => {
  return (
    <div className='bg-cloud bg-contain bg-no-repeat w-full h-80 relative'>
      <div className='bg-front opacity-90 absolute z-20 w-full h-full'></div>
      <div className='relative z-20 flex flex-col items-center'>
        <img className='my-24' src={weatherIcon} alt='' />
        <p className='text-9xl mb-6'>15°C</p>
        <p className='text-4xl text-gray mb-12'>Shower</p>
        <p className='text-lg text-gray mb-8'>Today · Fri, 5 Jun</p>
        <p className='text-lg text-gray flex items-center gap-3'>
          <ImLocation /> Helsinki
        </p>
      </div>
    </div>
  );
};

export default CurrentWeatherImage;
