import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { MealsRoutes } from '../navigation/RouteTypes';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoryMealScreen = (props: Props) => {
  const categoryId = props.navigation.getParam('id');
  const displayedMeals = MEALS.filter((m) => m.categoryIds.includes(categoryId));

  const handlePress = (mealId: string) => {
    props.navigation.navigate(MealsRoutes.MEAL_DETAIL, {
      mealId: mealId,
      title: displayedMeals.find((m) => m.id === mealId)?.title,
    });
  };

  return (
    <View style={styles.screen}>
      <MealList onPress={handlePress} meals={displayedMeals} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const navigationOptions = (navigationData: {
  navigation: NavigationStackProp<{}>;
}): NavigationStackOptions => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const currentCategory = CATEGORIES.find((el) => el.id === categoryId);
  return {
    headerTitle: currentCategory?.title,
  };
};

CategoryMealScreen.navigationOptions = navigationOptions;

export default CategoryMealScreen;
