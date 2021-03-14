import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import Meal from '../models/Meal';
import TouchableComponent from './TouchableComponent';
import DefaultText from './DefaultText';

type Props = {
  item: Meal;
  onPress: () => void;
};

const MealItem = ({ item, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableComponent style={{ flex: 1 }} onPress={onPress}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground source={{ uri: item.imageUrl }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.details }}>
            <DefaultText>{item.duration} minutes</DefaultText>
            <DefaultText>{item.complexity.toUpperCase()} </DefaultText>
            <DefaultText>{item.affordability.toUpperCase()} </DefaultText>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: '#fafafa',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 15,
  },
  row: {
    flexDirection: 'row',
  },
  header: {
    height: '90%',
  },
  details: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

export default MealItem;
