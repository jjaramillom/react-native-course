import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { FavoriteMealsRoutes } from './RouteTypes';
import { Route } from './index';
import colors from '../constants/colors';

type RoutesMap = {
  [key in FavoriteMealsRoutes]: Route<NavigationStackOptions, NavigationStackProp<{}>>;
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.accentColor,
  },
  headerTintColor: 'white',
};

const routesMap: RoutesMap = {
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: { headerTitle: 'Your favorites' },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
    }),
  },
};

const FavoriteMealsNavigator = createStackNavigator(routesMap, {
  defaultNavigationOptions,
});

export default FavoriteMealsNavigator;
