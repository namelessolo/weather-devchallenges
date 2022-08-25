import CurrentWeather from './components/template/CurrentWeather/CurrentWeather';
import DailyForecastList from './components/template/DailyForecastList/DailyForecastList';
import TodaysWeatherDetails from './components/organisms/TodaysWeatherDetails/TodaysWeatherDetails';

function App() {
  return (
    <div className='text-white'>
      <CurrentWeather />
      <DailyForecastList />
      <TodaysWeatherDetails />
    </div>
  );
}

export default App;
