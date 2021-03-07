import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItemInfo, Text } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoryMealScreen = (props: Props) => {
  const id = props.navigation.getParam('id');
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => (
    <MealItem item={itemData.item} />
  );

  const displayedMeals = MEALS.filter((m) => m.categoryIds.includes(id));
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.mealsList}
        data={displayedMeals}
        keyExtractor={(el) => el.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealsList: {
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 15,
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
