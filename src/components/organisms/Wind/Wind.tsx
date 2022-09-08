import TodaysWeatherContainer from '../TodaysWeatherContainer/TodaysWeatherContainer';
import { TiLocationArrow } from 'react-icons/ti';
import { degreesToDirection } from '../../../helpers/helpers';

type Props = {
  windSpeed: number;
  direction: number;
};

const Wind: React.FC<Props> = ({ windSpeed, direction }) => {
  return (
    <TodaysWeatherContainer title='Wind status'>
      <p className='text-6xl pb-10'>{windSpeed} mph</p>
      <div className='flex items-center gap-3'>
        <div
          className='w-5 h-5 rounded-full bg-gray grid place-items-center'
          style={{ transform: `rotate(${direction - 45}deg)` }}
        >
          <TiLocationArrow />
        </div>
        <p>{degreesToDirection(direction)}</p>
      </div>
    </TodaysWeatherContainer>
  );
};

export default Wind;
