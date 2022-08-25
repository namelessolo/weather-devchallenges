import TodaysWeatherContainer from '../../template/TodaysWeatherContainer/TodaysWeatherContainer';

type Props = {
  airPressure: number;
};

const AirPressure: React.FC<Props> = ({ airPressure }) => {
  return (
    <TodaysWeatherContainer title='Air Pressure'>
      <p className='text-6xl pb-4'>{airPressure} mb</p>
    </TodaysWeatherContainer>
  );
};

export default AirPressure;
