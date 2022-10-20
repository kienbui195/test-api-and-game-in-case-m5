import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'
import messReducer from '../features/messSlice'
import gameSuggestReducer from '../features/gameSuggestSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    mess: messReducer,
    dataGame: gameSuggestReducer
  }
});
