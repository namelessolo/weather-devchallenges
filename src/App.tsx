import CurrentWeather from './components/template/CurrentWeather/CurrentWeather';
import { store } from './store/app';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className='text-white'>
        <CurrentWeather />
      </div>
    </Provider>
  );
}

export default App;
