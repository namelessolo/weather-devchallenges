import DailyForecast from '../../organisms/DailyForecast/DailyForecast';

const DailyForecastList = () => {
  return (
    <div className='bg-background w-full p-6 md:grid md:col-start-2 md:col-end-3 md:pt-32 desktop:row-start-1 desktop:row-end-2 desktop:justify-center'>
      <div className='grid grid-cols-dailyForecast gap-10 md:justify-center desktop:max-w-[800px]'>
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
