import TodaysWeatherContainer from '../../template/TodaysWeatherContainer/TodaysWeatherContainer';

type Props = {
  humidity: number;
};

const Humidity: React.FC<Props> = ({ humidity }) => {
  return (
    <TodaysWeatherContainer title='Humidity'>
      <p className='text-6xl pb-4'>{humidity}%</p>
      <div className='w-2/3'>
        <div className='flex justify-between text-xs'>
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className='relative bg-white h-2 rounded-lg overflow-hidden my-1'>
          <div className='absolute h-full w-[84%] bg-yellow'></div>
        </div>
        <div className='flex justify-end text-xs'>
          <span>%</span>
        </div>
      </div>
    </TodaysWeatherContainer>
  );
};

export default Humidity;
