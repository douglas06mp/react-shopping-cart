import { useState } from 'react';

export function useInputState(initVal) {
  const [val, setVal] = useState(initVal);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const reset = () => {
    setVal(1);
  };
  return [val, handleChange, reset];
}
