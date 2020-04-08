import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}
