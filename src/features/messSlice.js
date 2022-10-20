import { createSlice } from '@reduxjs/toolkit';

export const messSlice = createSlice({
	name: 'mess',
    initialState: {
        mess: ''
    },
    reducers: {
        setMess: (state, action) => {
            state.mess = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { setMess } = messSlice.actions;

export default messSlice.reducer;
