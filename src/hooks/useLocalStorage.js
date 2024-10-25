import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  if (typeof window === "undefined") {
    return null;
  }
  const getStoredValue = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, removeValue];
};

export default useLocalStorage;
