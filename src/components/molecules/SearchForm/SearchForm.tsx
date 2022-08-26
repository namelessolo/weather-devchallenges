import InputSearch from '../../atoms/InputSearch/InputSearch';
import SearchButton from '../../atoms/SearchButton/SearchButton';

const SearchForm = () => {
  return (
    <div className='flex gap-3 justify-between mb-10'>
      <InputSearch />
      <SearchButton />
    </div>
  );
};

export default SearchForm;
