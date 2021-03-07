import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/dummy-data';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const MealDetailScreen = ({ navigation }: Props) => {
  const mealId = navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal?.title}</Text>
      <Button title='Go back to categories!' onPress={() => navigation.popToTop()} />
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

const navigationOptions: NavigationStackOptions = {
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title='Favorite'
        iconName='ios-star'
        onPress={() => {
          console.log('Mark as favorite!');
        }}
      />
    </HeaderButtons>
  ),
};

MealDetailScreen.navigationOptions = navigationOptions;

export default MealDetailScreen;
