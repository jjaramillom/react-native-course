import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import { Routes } from '../navigation/RouteTypes';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/Category';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = {
  navigation: NavigationStackProp<{}>;
};

const CategoriesScreen = ({ navigation }: Props) => {
  const renderGridItem = (itemData: ListRenderItemInfo<Category>): JSX.Element => (
    <CategoryGridTile
      onPress={() =>
        navigation.navigate({
          routeName: Routes.CATEGORY_MEALS,
          params: {
            title: itemData.item.title,
            color: itemData.item.color,
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
// const navigationOptions: NavigationStackOptions = {
//   headerTitle: 'Meal Categories',
// };

// CategoriesScreen.navigationOptions = navigationOptions;

export default CategoriesScreen;
