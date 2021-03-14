import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { NavigationStackOptions, NavigationStackProp } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';

type FilterSwitchProps = {
  label: string;
  value: boolean;
  onChange: (newValue: boolean) => void;
};

const FilterSwitch = ({ label, value, onChange }: FilterSwitchProps) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: colors.primaryColorLight, false: '' }}
        thumbColor={colors.primaryColor}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
};

type Props = {
  navigation: NavigationStackProp<{}>;
};

const FiltersScreen = ({ navigation }: Props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters / Restrictions</Text>
      <FilterSwitch label='Gluten-free' onChange={setIsGlutenFree} value={isGlutenFree} />
      <FilterSwitch label='Lactose-free' onChange={setIsLactoseFree} value={isLactoseFree} />
      <FilterSwitch label='Vegan' onChange={setIsVegan} value={isVegan} />
      <FilterSwitch label='Vegetarian' onChange={setIsVegetarian} value={isVegetarian} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

const navigationOptions = (navigationData: {
  navigation: NavigationDrawerProp<{}>;
}): NavigationStackOptions => {
  const saveFilters = navigationData.navigation.getParam('saveFilters');
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Save' iconName='ios-save' onPress={() => saveFilters()} />
      </HeaderButtons>
    ),
  };
};

FiltersScreen.navigationOptions = navigationOptions;

export default FiltersScreen;
