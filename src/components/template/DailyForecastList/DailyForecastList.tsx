import DailyForecast from '../../organisms/DailyForecast/DailyForecast';

const DailyForecastList = () => {
  return (
    <div className='bg-background h-screen w-full p-14'>
      <div className='grid grid-cols-dailyForecast gap-10 justify-center'>
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
        <DailyForecast />
      </div>
    </div>
  );
};

export default DailyForecastList;
