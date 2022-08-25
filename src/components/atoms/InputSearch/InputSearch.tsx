import { HiSearch } from 'react-icons/hi';

const InputSearch = () => {
  return (
    <div className='w-full h-12 relative'>
      <input
        className='bg-transparent w-full border-deepGray border-2 pl-12 h-full'
        type='text'
        placeholder='search location'
      />
      <div className='absolute top-1/2 left-4 -translate-y-1/2'>
        <HiSearch className='text-2xl' />
      </div>
    </div>
  );
};

export default InputSearch;
