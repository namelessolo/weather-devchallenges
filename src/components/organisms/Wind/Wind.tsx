import TodaysWeatherContainer from '../../template/TodaysWeatherContainer/TodaysWeatherContainer';
import { TiLocationArrow } from 'react-icons/ti';

type Props = {
  windSpeed: number;
  direction: string;
};

const Wind: React.FC<Props> = ({ windSpeed, direction }) => {
  return (
    <TodaysWeatherContainer title='Wind status'>
      <p className='text-6xl pb-10'>{windSpeed} mph</p>
      <div className='flex items-center gap-3'>
        <div className='w-5 h-5 rounded-full bg-gray grid place-items-center'>
          <TiLocationArrow />
        </div>
        <p>{direction}</p>
      </div>
    </TodaysWeatherContainer>
  );
};

export default Wind;
