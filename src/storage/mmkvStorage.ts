import {
    MMKV,
} from 'react-native-mmkv';

const storage = new MMKV();

export const getItem = (key: string) => {
    return storage.getString(key);
};

export const setItem = (key: string, value: any) => {
    storage.set(key, value);
};

export const clearAll = () => {
    storage.clearAll();
};

export const removeItem = (key: string) => {
    storage.contains(key) && storage.delete(key);
};
