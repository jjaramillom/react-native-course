import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/Meal';
import { ActionTypes, ToggleFavorite, SetFilters } from '../actions/mealsActionTypes';

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

const setFilters = (state: State, { payload: { filters } }: SetFilters): State => {
  const filteredMeals = [...state.meals].filter(
    (m) =>
      (filters.glutenFree ? m.isGlutenFree : true) &&
      (filters.lactoseFree ? m.isLactoseFree : true) &&
      (filters.vegan ? m.isVegan : true) &&
      (filters.vegetarian ? m.isVegetarian : true)
  );
  return {
    ...state,
    filteredMeals,
  };
};

const mealsReducer = (state: State = initialState, action: ActionTypes) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action);

    case 'SET_FILTERS':
      return setFilters(state, action);

    default:
      return state;
  }
};

export default mealsReducer;
