export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export interface ToggleFavorite {
  type: typeof TOGGLE_FAVORITE;
  payload: { mealId: string };
}

export type ActionTypes = ToggleFavorite;
