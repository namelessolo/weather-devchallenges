import SearchForm from '../../molecules/SearchForm/SearchForm';
import CityButton from '../../atoms/CityButton/CityButton';
import CloseButton from '../../atoms/CloseButton/CloseButton';

const Menu = () => {
  return (
    <div className='bg-front h-full p-3'>
      <CloseButton />
      <SearchForm />
      <div className='flex flex-col gap-5'>
        <CityButton city='London' />
        <CityButton city='London' />
        <CityButton city='London' />
      </div>
    </div>
  );
};

export default Menu;
