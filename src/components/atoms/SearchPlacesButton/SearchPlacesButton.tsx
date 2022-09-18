import { useAppDispatch } from '../../../store/hooks';
import { showMenu } from '../../../slice/weatherSlice';

const SearchPlacesButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className='bg-deepGray px-5 py-3'
      onClick={() => dispatch(showMenu())}
    >
      Search for places
    </button>
  );
};

export default SearchPlacesButton;
