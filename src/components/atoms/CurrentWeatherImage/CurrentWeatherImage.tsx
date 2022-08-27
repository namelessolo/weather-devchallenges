import weatherIcon from '../../../assets/LightCloud.png';

const CurrentWeatherImage = () => {
  return (
    <div className='bg-cloud bg-contain bg-no-repeat w-full relative'>
      <div className='bg-front opacity-90 absolute z-20 w-full h-full'></div>
      <div className='relative z-20'>
        <img className='my-24 mx-auto' src={weatherIcon} alt='' />
      </div>
    </div>
  );
};

export default CurrentWeatherImage;
