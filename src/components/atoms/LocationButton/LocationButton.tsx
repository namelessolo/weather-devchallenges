import { MdMyLocation } from 'react-icons/md';
import { useAppDispatch } from '../../../store/hooks';
import { fetchWeather } from '../../../store/weatherSlice';

const LocationButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className='bg-deepGray h-12 w-12 grid place-items-center rounded-full'
      onClick={() => dispatch(fetchWeather(null))}
    >
      <MdMyLocation className='w-3/5 h-3/5' />
    </button>
  );
};

export default LocationButton;
