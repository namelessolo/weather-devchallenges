type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const TodaysWeatherContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <div className='bg-front w-80 flex flex-col items-center py-6 basis-80 flex-1'>
      <h2 className='pb-5'>{title}</h2>
      {children}
    </div>
  );
};

export default TodaysWeatherContainer;
