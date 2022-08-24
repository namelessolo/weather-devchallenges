import { MdMyLocation } from 'react-icons/md';

const LocationButton = () => {
  return (
    <button className='bg-deepGray h-12 w-12 grid place-items-center rounded-full'>
      <MdMyLocation className='w-3/5 h-3/5' />
    </button>
  );
};

export default LocationButton;
