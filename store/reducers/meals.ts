import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/Meal';

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

const mealsReducer = (state: State = initialState, action: any) => {
  return state;
};

export default mealsReducer;
