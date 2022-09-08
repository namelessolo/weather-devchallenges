type Props = {
  weather_icon: string;
};

const CurrentWeatherImage: React.FC<Props> = ({ weather_icon }) => {
  return (
    <div className='bg-cloud bg-contain bg-no-repeat w-full relative'>
      <div className='bg-front opacity-90 absolute z-20 w-full h-full'></div>
      <div className='relative z-20'>
        <img
          className='my-24 mx-auto'
          src={`https://openweathermap.org/img/wn/${weather_icon}@4x.png`}
          alt='icon weather'
        />
      </div>
    </div>
  );
};

export default CurrentWeatherImage;
