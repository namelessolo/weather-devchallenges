import InputSearch from '../../atoms/InputSearch/InputSearch';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import { IoCloseSharp } from 'react-icons/io5';
import CityButton from '../../atoms/CityButton/CityButton';

const Menu = () => {
  return (
    <div className='bg-front h-screen p-3'>
      <button className='block ml-auto text-4xl mb-8'>
        <IoCloseSharp />
      </button>
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
