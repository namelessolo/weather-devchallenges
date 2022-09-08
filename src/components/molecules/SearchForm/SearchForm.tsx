import InputSearch from '../../atoms/InputSearch/InputSearch';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import useForm from '../../../hooks/useForm';
import { useAppDispatch } from '../../../store/hooks';
import { fetchWeather } from '../../../store/weatherSlice';

const SearchForm = () => {
  const { input, handleInput } = useForm();
  const dispatch = useAppDispatch();

  return (
    <form
      className='flex gap-3 justify-between mb-10'
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchWeather(input));
      }}
    >
      <InputSearch
        input={input}
        handleInput={handleInput}
      />
      <SearchButton />
    </form>
  );
};

export default SearchForm;
