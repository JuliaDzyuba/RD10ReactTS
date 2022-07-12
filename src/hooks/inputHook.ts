import { useEffect, useState } from "react";

const useInput = (inputValue: string) => {
  const [value, setValue] = useState(inputValue);
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

  useEffect(() => {
    if(value.length < 3) {
      setError('must be at least 3 characters')
    } else {
      setError('')
    }
  }, [value]);
  
  return {
    value,
    onChange,
    error,
  };
};

export default useInput;