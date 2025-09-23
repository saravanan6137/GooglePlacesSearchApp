import { createSlice } from '@reduxjs/toolkit';
import { PlaceItem } from '@/types';

const INITIAL_STATE: PlaceItem[] = [];

const historySlice = createSlice({
    name: 'history',
    initialState: INITIAL_STATE,
    reducers: {
        addToHistory: (state, action) => {
            state.push(action.payload);
        },
        removeHistory: (state, action) => {
            return state.filter(item => item?.name?.toLowerCase() !== action.payload?.name?.toLowerCase());
        },
        clearHistory: () => {
            return [];
        },
        updateHistory: (state, action) => {
            return action.payload;
        },
    },
});

export const { addToHistory, removeHistory, clearHistory, updateHistory } = historySlice.actions;

export default historySlice.reducer;
