import TodaysWeatherContainer from '../../template/TodaysWeatherContainer/TodaysWeatherContainer';

type Props = {
  visibility: number;
};

const Visibility: React.FC<Props> = ({ visibility }) => {
  return (
    <TodaysWeatherContainer title='Visibility'>
      <p className='text-6xl pb-4'>{visibility} miles</p>
    </TodaysWeatherContainer>
  );
};

export default Visibility;
