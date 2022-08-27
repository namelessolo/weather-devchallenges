type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const TodaysWeatherContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='bg-front flex flex-col items-center py-6 min-w-[20rem] w-full flex-1'>
      <h2 className='pb-5'>{title}</h2>
      {children}
    </div>
  );
};

export default TodaysWeatherContainer;
