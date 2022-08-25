import Wind from '../Wind/Wind';
import Humidity from '../Humidity/Humidity';
import Visibility from '../Visibility/Visibility';
import AirPressure from '../AirPressure/AirPressure';

const TodaysWeatherDetails = () => {
  return (
    <div className='bg-background flex flex-col gap-10 p-6'>
      <h2 className='text-2xl'>Today's Highlights</h2>
      <div className='flex gap-10 flex-wrap'>
        <Wind windSpeed={7} direction='WSW' />
        <Humidity humidity={84} />
        <Visibility visibility={6.4} />
        <AirPressure airPressure={998} />
      </div>
    </div>
  );
};

export default TodaysWeatherDetails;
