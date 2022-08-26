import { IoCloseSharp } from 'react-icons/io5';
import { useAppDispatch } from '../../../store/hooks';
import { closeMenu } from '../../../store/weatherSlice';

const CloseButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button className='block ml-auto text-4xl mb-8' onClick={() => dispatch(closeMenu())}>
      <IoCloseSharp />
    </button>
  );
};

export default CloseButton;
