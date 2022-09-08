import Wind from '../../organisms/Wind/Wind';
import Humidity from '../../organisms/Humidity/Humidity';
import Visibility from '../../organisms/Visibility/Visibility';
import AirPressure from '../../organisms/AirPressure/AirPressure';

import { useAppSelector } from '../../../store/hooks';

const TodaysWeatherDetails = () => {
  const currentWeather = useAppSelector((state) => state.weather.weather.currentWeather);
  if (!currentWeather) return null;

  return (
    <div className='bg-background flex flex-col gap-10 p-6 md:grid md:col-span-2 desktop:row-start-2 desktop:row-end-3 desktop:col-start-2 desktop:col-end-3 desktop:justify-center'>
      <h2 className='text-2xl'>Today's Highlights</h2>
      <div className='flex gap-10 flex-wrap md:grid md:grid-cols-2 desktop:grid-cols-todaysWeatherDetails desktop:max-w-[800px]'>
        <Wind
          windSpeed={currentWeather.wind.speed}
          direction={currentWeather.wind.deg}
        />
        <Humidity humidity={currentWeather.main.humidity} />
        <Visibility visibility={currentWeather.visibility} />
        <AirPressure airPressure={currentWeather.main.pressure} />
      </div>
    </div>
  );
};

export default TodaysWeatherDetails;
