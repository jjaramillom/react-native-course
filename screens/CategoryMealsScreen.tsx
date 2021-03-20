import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import { useMealsReducer } from '../hooks';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoryMealScreen = ({ navigation }: Props) => {
  const [_, { filteredMeals }] = useMealsReducer();
  const categoryId = navigation.getParam('id');
  const displayedMeals = filteredMeals.filter((m) => m.categoryIds.includes(categoryId));

  return (
    <View style={styles.screen}>
      <MealList navigation={navigation} meals={displayedMeals} />
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
