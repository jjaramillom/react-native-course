import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TouchableComponent from './TouchableComponent';

type Props = {
  onPress: () => void;
  title: string;
  color: string;
};

const CategoryGridTile = ({ onPress, title, color }: Props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={onPress}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
