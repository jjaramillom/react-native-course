import React from 'react';
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import MealsNavigator from './MealsStackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import { MealsFavRoutes } from './RouteTypes';
import colors from '../constants/colors';
import { Route } from './index';

type RoutesMap = {
  [key in MealsFavRoutes]: Route<NavigationBottomTabOptions, NavigationTabProp>;
};

const mealsFavRoutes: RoutesMap = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-restaurant' size={25} color={tintColor} />
      ),
    },
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-star' size={25} color={tintColor} />
      ),
    },
  },
};

const FavoritesTabNavigator = createBottomTabNavigator(mealsFavRoutes, {
  tabBarOptions: { activeTintColor: colors.accentColor },
});

export default FavoritesTabNavigator;
