import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navigator from './navigation';
import { rootReducer } from './store/reducers/root';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const store = createStore(rootReducer);

enableScreens();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    fetchFonts();
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
