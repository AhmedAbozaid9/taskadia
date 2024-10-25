import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Check if running on client side
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setValue(JSON.parse(storedValue));
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const removeValue = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
      setValue(initialValue);
    }
  };

  return [value, setValue, removeValue];
};

export default useLocalStorage;
