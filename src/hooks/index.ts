import { useState, useEffect } from 'react';
//import { Product } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const addToFavorites = (productId: string) => {
    const newFavorites = [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (productId: string) => {
    const newFavorites = favorites.filter(id => id !== productId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const toggleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};

export const useViewHistory = () => {
  const [viewHistory, setViewHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('viewHistory');
    if (savedHistory) {
      setViewHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addToHistory = (productId: string) => {
    const newHistory = [productId, ...viewHistory.filter(id => id !== productId)].slice(0, 10);
    setViewHistory(newHistory);
    localStorage.setItem('viewHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setViewHistory([]);
    localStorage.removeItem('viewHistory');
  };

  return {
    viewHistory,
    addToHistory,
    clearHistory
  };
};

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};
