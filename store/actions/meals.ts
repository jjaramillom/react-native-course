import { TOGGLE_FAVORITE, ActionTypes } from './mealsActionTypes';

export const toggleFavorite = (mealId: string): ActionTypes => ({
  type: TOGGLE_FAVORITE,
  payload: { mealId },
});
