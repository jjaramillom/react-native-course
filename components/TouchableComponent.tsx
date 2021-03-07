import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';

type Props = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const TouchableComponent = ({ children, onPress }: React.PropsWithChildren<Props>) => {
  let TouchableCmp: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp style={{ flex: 1 }} onPress={onPress}>
      {children}
    </TouchableCmp>
  );
};

export default TouchableComponent;
