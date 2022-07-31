import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import appSlice from './reducers/appSlice/appSlice';
import commonSlice from './reducers/commonSlice/commonSlice';

const rootReducer = combineReducers({
  app: appSlice,
  common: commonSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
