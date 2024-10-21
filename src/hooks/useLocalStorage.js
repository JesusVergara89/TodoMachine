import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      try {
        const parseItem = JSON.parse(localStorage.getItem(key)) || initialValue;
        setLoading(false);
        setItem(parseItem);
      } catch {
        setError(true);
        setLoading(false);
      }
    }, 1000);
  }, []);

  const saveItem = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setItem(data);
  };
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
