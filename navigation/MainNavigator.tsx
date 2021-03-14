import {
  createDrawerNavigator,
  NavigationDrawerOptions,
  NavigationDrawerProp,
} from 'react-navigation-drawer';

import FiltersNavigator from './FiltersNavigator';
import MealsFavNavigator from './MealsFavNavigator';
import { MainRoutes } from './RouteTypes';
import { Route } from './index';
import colors from '../constants/colors';

type RoutesMap = {
  [key in MainRoutes]: Route<NavigationDrawerOptions, NavigationDrawerProp>;
};

const routesMap: RoutesMap = {
  MealsFavs: {
    screen: MealsFavNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
    },
  },
  Filters: {
    screen: FiltersNavigator,
    navigationOptions: {
      drawerLabel: 'Filters',
    },
  },
};

const MainNavigator = createDrawerNavigator(routesMap, {
  contentOptions: {
    activeTintColor: colors.accentColor,
    labelStyles: {
      fontFamily: 'open-sans-bold',
    },
  },
});
export default MainNavigator;
