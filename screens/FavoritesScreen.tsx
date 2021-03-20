import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useMealsReducer } from '../hooks';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const FavoritesScreen = ({ navigation }: Props) => {
  const [_, { favoriteMeals }] = useMealsReducer();
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.content}>
        <View style={{ paddingHorizontal: 10 }}>
          <DefaultText style={{ textAlign: 'center' }}>
            No favorites meal yet. Go and check our meals and hit the star Button!
          </DefaultText>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <MealList meals={favoriteMeals} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

const navigationOptions = (navigationData: {
  navigation: NavigationDrawerProp<{}>;
}): NavigationStackOptions => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-menu'
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

FavoritesScreen.navigationOptions = navigationOptions;

export default FavoritesScreen;
