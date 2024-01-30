import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
}


const initialState: CounterState = {
    count: 5
}

const conterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        }
    }
});

export const { } = conterSlice.actions;

export default conterSlice.reducer;