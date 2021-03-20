import React from 'react';
import { StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';
import { MealsRoutes } from '../navigation/RouteTypes';

type Props = {
  meals: Meal[];
  navigation: NavigationStackProp<{}>;
};

const CategoryMealScreen = ({ navigation, meals }: Props) => {
  const handlePress = (id: string) => {
    navigation.navigate(MealsRoutes.MEAL_DETAIL, {
      id: id,
      title: meals.find((m) => m.id === id)?.title,
    });
  };
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => (
    <MealItem item={itemData.item} onPress={() => handlePress(itemData.item.id)} />
  );

  return (
    <FlatList
      style={styles.list}
      data={meals}
      keyExtractor={(el) => el.id}
      renderItem={renderMealItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
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
