import { Filter } from '../../models/Meal';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export type Filters = Record<Filter, boolean>;

export interface ToggleFavorite {
  type: typeof TOGGLE_FAVORITE;
  payload: { mealId: string };
}

export interface SetFilters {
  type: typeof SET_FILTERS;
  payload: { filters: Filters };
}

export type ActionTypes = ToggleFavorite | SetFilters;
