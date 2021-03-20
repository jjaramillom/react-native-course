import React from 'react';
import { StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';
import Meal from '../models/Meal';
import MealItem from '../components/MealItem';
import { MealsRoutes } from '../navigation/RouteTypes';
import { useMealsReducer } from '../hooks';
import DefaultText from './DefaultText';

type Props = {
  meals: Meal[];
  navigation: NavigationStackProp<{}>;
  noMealsMessage?: string;
};

const CategoryMealScreen = ({ navigation, meals, noMealsMessage }: Props) => {
  const [_, { favoriteMeals }] = useMealsReducer();
  const handlePress = (id: string) => {
    navigation.navigate(MealsRoutes.MEAL_DETAIL, {
      id: id,
      title: meals.find((m) => m.id === id)?.title,
      isFavorite: favoriteMeals.some((m) => m.id === id),
    });
  };
  const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => (
    <MealItem item={itemData.item} onPress={() => handlePress(itemData.item.id)} />
  );

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <View style={{ paddingHorizontal: 10 }}>
          <DefaultText style={{ textAlign: 'center' }}>
            {noMealsMessage ?? 'No available meals :('}
          </DefaultText>
        </View>
      </View>
    );
  }

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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
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
