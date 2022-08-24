import weatherIcon from '../../assets/LightCloud.png';

const DailyForecast = () => {
  return (
    <div className='bg-front text-white flex flex-col items-center justify-center p-5 w-32 text-base h-48'>
      <p>Sun, 7 Jun</p>
      <img className='w-14 mt-3 mb-8' src={weatherIcon} alt='' />
      <p className='flex gap-4'>
        <span>15°C</span>
        <span className='text-gray'>15°C</span>
      </p>
    </div>
  );
};

export default DailyForecast;
