import CurrentWeather from './components/template/CurrentWeather/CurrentWeather';
import DailyForecastList from './components/template/DailyForecastList/DailyForecastList';
import TodaysWeatherDetails from './components/organisms/TodaysWeatherDetails/TodaysWeatherDetails';

function App() {
  return (
    <div className='text-white'>
      <TodaysWeatherDetails />
    </div>
  );
}

export default App;
