import { combineReducers } from 'redux';
import { gameboardReducer } from './gameboardReducer';
import { loadingReducer } from './loadingReducer';

export const rootReducer = combineReducers({
  gameboardWords: gameboardReducer,
  isLoading: loadingReducer,
});