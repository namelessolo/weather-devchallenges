import DailyForecast from '../../organisms/DailyForecast/DailyForecast';
import { formatToDailyForecast } from '../../../helpers/helpers';
import { useAppSelector } from '../../../store/hooks';

const DailyForecastList = () => {
  const dailyForecast = useAppSelector((state) => state.weather.weather.forecast);
  if (!dailyForecast) return null;

  const forecast = formatToDailyForecast(dailyForecast);
  return (
    <div className='bg-background w-full p-6 md:grid md:col-start-2 md:col-end-3 md:pt-32 desktop:row-start-1 desktop:row-end-2 desktop:justify-center'>
      <div className='grid grid-cols-dailyForecast gap-10 justify-center desktop:max-w-[800px]'>
        {forecast.map(({ date, image, maxTemp, minTemp }) => {
          return (
            <DailyForecast
              date={date}
              weatherIcon={image}
              maxTemp={maxTemp}
              minTemp={minTemp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecastList;
