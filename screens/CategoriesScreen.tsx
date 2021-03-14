import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MealsRoutes } from '../navigation/RouteTypes';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/Category';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>): JSX.Element => (
    <CategoryGridTile
      onPress={() =>
        navigation.navigate({
          routeName: MealsRoutes.CATEGORY_MEALS,
          params: {
            title: itemData.item.title,
            color: itemData.item.color,
            id: itemData.item.id,
          },
        })
      }
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}></FlatList>
  );
};

/**
 * ? Changed for global default navigation options in MealsNavigator.ts
 */
// Automatically checked by react navigator
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

CategoriesScreen.navigationOptions = navigationOptions;

export default CategoriesScreen;
