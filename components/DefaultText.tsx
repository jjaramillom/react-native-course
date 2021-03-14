import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = ({ children }: React.PropsWithChildren<{}>) => (
  <Text style={styles.text}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

export default DefaultText;
