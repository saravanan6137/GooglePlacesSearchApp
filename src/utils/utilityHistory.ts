import { getItem, setItem } from '@storage/mmkvStorage';
import { SEARCH_HISTORY } from '@/constants/data';

export const saveHistory = (history: string[]) => {
  setItem(SEARCH_HISTORY, JSON.stringify(history));
};

export const getHistory = (): string[] => {
  const value = getItem(SEARCH_HISTORY);
  return value ? JSON.parse(value) : [];
};
