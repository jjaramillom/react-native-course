import { TOGGLE_FAVORITE, SET_FILTERS, Filters, ActionTypes } from './mealsActionTypes';

export const toggleFavorite = (mealId: string): ActionTypes => ({
  type: TOGGLE_FAVORITE,
  payload: { mealId },
});

export const setFilter = (filters: Filters): ActionTypes => ({
  type: SET_FILTERS,
  payload: { filters },
});
