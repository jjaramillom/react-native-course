import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import FiltersScreen from '../screens/FiltersScreen';
import { FiltersRoutes } from './RouteTypes';
import { Route } from './index';
import colors from '../constants/colors';

type RoutesMap = {
  [key in FiltersRoutes]: Route<NavigationStackOptions, NavigationStackProp<{}>>;
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerTitle: 'Filter meals',
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: 'white',
};

const routesMap: RoutesMap = {
  Filters: {
    screen: FiltersScreen,
    navigationOptions: { headerTitle: 'Meal categories' },
  },
};

const FiltersNavigator = createStackNavigator(routesMap, { defaultNavigationOptions });
export default FiltersNavigator;
