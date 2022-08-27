import CurrentWeather from '../CurrentWeather/CurrentWeather';
import DailyForecastList from '../DailyForecastList/DailyForecastList';
import TodaysWeatherDetails from '../TodaysWeatherDetails/TodaysWeatherDetails';

const AppWrapper = () => {
  return (
    <div className='text-white md:grid md:grid-cols-appMedium desktop:grid-rows-appDesktop desktop:grid-cols-appDesktop'>
      <CurrentWeather />
      <DailyForecastList />
      <TodaysWeatherDetails />
    </div>
  );
};

export default AppWrapper;
