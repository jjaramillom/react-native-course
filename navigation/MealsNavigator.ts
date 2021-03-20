import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { MealsRoutes } from './RouteTypes';
import { Route } from './index';
import colors from '../constants/colors';

type RoutesMap = {
  [key in MealsRoutes]: Route<NavigationStackOptions, NavigationStackProp<{}>>;
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
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
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam('title'),
    }),
  },
  MealDetail: {
    screen: MealDetailScreen,
    // Done in the MealDetailScreen component
    // navigationOptions: ({ navigation }) => ({
    //   headerTitle: navigation.getParam('title'),
    // }),
  },
};

const MealsNavigator = createStackNavigator(stackRoutesMap, { defaultNavigationOptions });

export default MealsNavigator;
