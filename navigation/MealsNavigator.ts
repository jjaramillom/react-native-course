import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Routes } from './RouteTypes';
import colors from '../constants/colors';

type NavigationOptions =
  | NavigationStackOptions
  | ((navigationData: { navigation: NavigationStackProp<{}> }) => NavigationStackOptions);

type Route = {
  screen: (props: any) => JSX.Element;
  navigationOptions?: NavigationOptions;
};

type RouteMap = {
  [key in Routes]: Route | ((props: any) => JSX.Element);
};

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: 'white',
};

const routesMap: RouteMap = {
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

const MealsNavigator = createStackNavigator(routesMap, { defaultNavigationOptions });

export default createAppContainer(MealsNavigator);
