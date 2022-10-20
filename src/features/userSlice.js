import { createSlice } from '@reduxjs/toolkit';

export const userRegisterSlice = createSlice({
	name: 'user',
    initialState: {
        name: '',
        email: ''
    },
    reducers: {
        getEmail: (state, action) => {
            state.email = action.payload
        }
    }
});

// Action creators are generated for each case reducer function
export const { getEmail } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
