import React from 'react';

type Props = {
  city: string;
};

const CityButton: React.FC<Props> = ({ city }) => {
  return (
    <button className='w-full h-16 bg-transparent border-2 border-transparent hover:border-2 hover:border-gray text-left pl-4'>
      {city}
    </button>
  );
};

export default CityButton;
