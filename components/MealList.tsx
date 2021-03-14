import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';

type Props = {
  meals: Meal[];
  onPress: (id: string) => void;
};

const CategoryMealScreen = ({ onPress, meals }: Props) => {
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => (
    <MealItem item={itemData.item} onPress={() => onPress(itemData.item.id)} />
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
