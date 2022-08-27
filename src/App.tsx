import AppWrapper from './components/template/AppWrapper/AppWrapper';
import { store } from './store/app';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
