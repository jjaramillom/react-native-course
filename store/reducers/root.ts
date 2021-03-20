import { combineReducers } from 'redux';

import mealsReducer from './meals';

export const rootReducer = combineReducers({
  meals: mealsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
