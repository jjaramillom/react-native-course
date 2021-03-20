import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/Meal';
import { ActionTypes, ToggleFavorite } from '../actions/mealsActionTypes';

export interface State {
  meals: Meal[];
  filteredMeals: Meal[];
  favoriteMeals: Meal[];
}

const initialState: State = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const toggleFavorite = (state: State, { payload }: ToggleFavorite): State => {
  const mealToToggleIndex = state.favoriteMeals.findIndex((m) => m.id === payload.mealId);
  if (mealToToggleIndex < 0) {
    const mealToAdd = state.meals.find((m) => m.id === payload.mealId);
    if (!mealToAdd) {
      return state;
    }
    return {
      ...state,
      favoriteMeals: [...state.favoriteMeals, mealToAdd],
    };
  } else {
    const newFavoriteMeals = [...state.favoriteMeals];
    newFavoriteMeals.splice(mealToToggleIndex, 1);
    return {
      ...state,
      favoriteMeals: newFavoriteMeals,
    };
  }
};

const mealsReducer = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action);
      break;

    default:
      break;
  }
  return state;
};

export default mealsReducer;
