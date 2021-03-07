import { createAppContainer } from 'react-navigation';

import MealsFavTabNavigator from './FavoritesTabNavigator';

type NavigationOptions<T, S> = T | ((navigationData: { navigation: S }) => T);

export type Route<T, S> = {
  screen: any;
  navigationOptions?: NavigationOptions<T, S>;
};

export default createAppContainer(MealsFavTabNavigator);
