import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { StackRoutes } from './RouteTypes';
import colors from '../constants/colors';
import { Route } from './index';

type RoutesMap = {
  [key in StackRoutes]: Route<NavigationStackOptions, NavigationStackProp<{}>>;
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: 'white',
};

const stackRoutesMap: RoutesMap = {
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: { headerTitle: 'Meal categories' },
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
    navigationOptions: ({ navigation }) => {
      const color = navigation.getParam('color');
      const title = navigation.getParam('title');
      return {
        headerTitle: title,
        headerStyle: { backgroundColor: color },
      };
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
      headerStyle: { backgroundColor: navigation.getParam('color') },
    }),
  },
};

const MealsNavigator = createStackNavigator(stackRoutesMap, { defaultNavigationOptions });

export default MealsNavigator;
