import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

const DefaultText = ({
  children,
}: React.PropsWithChildren<{ style?: StyleProp<TextStyle> }>) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
