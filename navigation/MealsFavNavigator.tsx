import React from 'react';
import { Platform, Text } from 'react-native';
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp,
} from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabOptions,
} from 'react-navigation-material-bottom-tabs';

import MealsNavigator from './MealsNavigator';
import FavoriteMealsNavigator from './FavoriteMealsNavigator';
import { MealsFavs } from './RouteTypes';
import { Route } from './index';
import colors from '../constants/colors';

type RoutesMap = {
  [key in MealsFavs]:
    | Route<NavigationBottomTabOptions, NavigationTabProp>
    | Route<NavigationMaterialBottomTabOptions, NavigationTabProp>;
};

const routesMap: RoutesMap = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name='ios-restaurant' size={25} color={tintColor} />
      ),
      tabBarColor: colors.primaryColor,
      tabBarLabel: <Text style={{ fontFamily: 'open-sans' }}>Meals</Text>,
    },
  },
  Favorites: {
    screen: FavoriteMealsNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-star' size={25} color={tintColor} />,
      tabBarColor: colors.accentColor,
      tabBarLabel: <Text style={{ fontFamily: 'open-sans' }}>Favorites</Text>,
    },
  },
};

const GlobalNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(routesMap, {
        activeColor: 'white',
        shifting: true,
        barStyle: {
          backgroundColor: colors.primaryColor,
        },
      })
    : createBottomTabNavigator(routesMap, {
        tabBarOptions: {
          activeTintColor: colors.accentColor,
          labelStyle: { fontFamily: 'open-sans' },
        },
      });

export default GlobalNavigator;
