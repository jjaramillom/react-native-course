import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { Routes } from '../navigation/RouteTypes';
import { CATEGORIES } from '../data/dummy-data';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoryMealScreen = (props: Props) => {
  const title = props.navigation.getParam('title');
  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Button
        title='Go to details!'
        onPress={() => props.navigation.navigate(Routes.MEAL_DETAIL)}
      />
      <Button title='Go back!' onPress={() => props.navigation.pop()} />
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
