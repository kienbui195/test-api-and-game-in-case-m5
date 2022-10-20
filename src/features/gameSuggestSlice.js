import { createSlice } from '@reduxjs/toolkit';

export const datagameSlice = createSlice({
	name: 'dataGame',
    initialState: {
        value: ''
    },
    reducers: {
        getValue: (state, action) => {
            state.value = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { getValue } = datagameSlice.actions;

export default datagameSlice.reducer;
