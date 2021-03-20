import React, { useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import Meal from '../models/Meal';
import { useMealsReducer } from '../hooks';
import { toggleFavorite } from '../store/actions';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const ListItem = ({ children }: React.PropsWithChildren<{}>) => (
  <View style={styles.listItem}>
    <DefaultText>{children} </DefaultText>
  </View>
);

const MealDetailScreen = ({ navigation }: Props) => {
  const [dispatch, { meals, favoriteMeals }] = useMealsReducer();
  const mealId = navigation.getParam('id');
  const isFavorite = favoriteMeals.some((m) => m.id === mealId);

  const toggleFavoriteHandler = useCallback(() => dispatch(toggleFavorite(mealId)), [
    mealId,
    dispatch,
  ]);

  useEffect(() => {
    navigation.setParams({ isFavorite });
  }, [mealId, isFavorite]);

  useEffect(() => {
    navigation.setParams({ setFavorite: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  const selectedMeal = meals.find((meal) => meal.id === mealId) as Meal;

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} minutes</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()} </DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()} </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((i) => (
        <ListItem key={i}> {i} </ListItem>
      ))}
      <Text>List of ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((s) => (
        <ListItem key={s}> {s} </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

const navigationOptions = (navigationData: {
  navigation: NavigationDrawerProp<{}>;
}): NavigationStackOptions => {
  const title = navigationData.navigation.getParam('title');
  const isFavorite = navigationData.navigation.getParam('isFavorite');
  const setFavorite = navigationData.navigation.getParam('setFavorite');
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={setFavorite}
        />
      </HeaderButtons>
    ),
  };
};

MealDetailScreen.navigationOptions = navigationOptions;

export default MealDetailScreen;
