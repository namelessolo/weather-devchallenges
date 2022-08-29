import { HiSearch } from 'react-icons/hi';

type Props = {
  input: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputSearch: React.FC<Props> = ({ input, handleInput }) => {
  return (
    <div className='w-full h-12 relative'>
      <input
        className='bg-transparent w-full border-deepGray border-2 pl-12 h-full'
        type='text'
        placeholder='search location'
        value={input}
        onChange={handleInput}
      />
      <div className='absolute top-1/2 left-4 -translate-y-1/2'>
        <HiSearch className='text-2xl' />
      </div>
    </div>
  );
};

export default InputSearch;
