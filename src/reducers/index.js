import { combineReducers } from 'redux';
import { gameboardReducer } from './gameboardReducer';

export const rootReducer = combineReducers({
  gameboardWords: gameboardReducer,
});