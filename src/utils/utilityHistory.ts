import { getItem, setItem, removeItem } from '@storage/mmkvStorage';
import { SEARCH_HISTORY_KEY } from '@constants/data';
import { PlaceItem } from '@/types';

export const saveHistory = (newPlace: PlaceItem) => {
  const existing: PlaceItem[] = getHistory();
  const filtered = existing?.filter(p => p.name !== newPlace?.name);
  const updated = [newPlace, ...filtered];

  setItem(SEARCH_HISTORY_KEY, JSON.stringify(updated));
};

export const getHistory = (): PlaceItem[] => {
  const value = getItem(SEARCH_HISTORY_KEY);
  return value ? JSON.parse(value) : [];
};

export const clearHistory = () => {
  removeItem(SEARCH_HISTORY_KEY);
};
