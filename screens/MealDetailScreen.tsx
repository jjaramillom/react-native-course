import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';

import { CATEGORIES } from '../data/dummy-data';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const MealDetailScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen!</Text>
      <Button title='Go back to categories!' onPress={() => props.navigation.popToTop()} />
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
  console.log(categoryId)
  const currentCategory = CATEGORIES.find((el) => el.id === categoryId);
  return {
    headerTitle:'12321321',
    headerStyle: {
      backgroundColor: currentCategory?.color,
    },
  };
};

MealDetailScreen.navigationOptions = navigationOptions;

export default MealDetailScreen;
