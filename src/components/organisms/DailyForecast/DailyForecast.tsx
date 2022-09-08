type Props = {
  weatherIcon: string;
  date: string;
  minTemp: number;
  maxTemp: number;
};

const DailyForecast: React.FC<Props> = ({ weatherIcon, date, maxTemp, minTemp }) => {
  return (
    <div className='bg-front text-white flex flex-col items-center justify-center p-5 w-32 text-base h-48'>
      <p>{date}</p>
      <img
        className='w-14 mt-3 mb-8'
        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
        alt=''
      />
      <p className='flex gap-4'>
        <span>{maxTemp}°C</span>
        <span className='text-gray'>{minTemp}°C</span>
      </p>
    </div>
  );
};

export default DailyForecast;
