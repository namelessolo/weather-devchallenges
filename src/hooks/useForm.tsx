import { useState } from 'react';

const useForm = () => {
  const [input, setInput] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return { input, handleInput };
};

export default useForm;
