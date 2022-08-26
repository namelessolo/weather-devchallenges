import InputSearch from '../../atoms/InputSearch/InputSearch';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import CityButton from '../../atoms/CityButton/CityButton';
import CloseButton from '../../atoms/CloseButton/CloseButton';

const Menu = () => {
  return (
    <div className='bg-front h-full p-3'>
      <CloseButton />
      <div className='flex gap-3 justify-between mb-10'>
        <InputSearch />
        <SearchButton />
      </div>
      <div className='flex flex-col gap-5'>
        <CityButton city='London' />
        <CityButton city='London' />
        <CityButton city='London' />
      </div>
    </div>
  );
};

export default Menu;
