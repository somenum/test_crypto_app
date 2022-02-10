import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import coinReducer from './reducers/CoinSlice';

const rootReducer = combineReducers({
  coinReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  },);
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
