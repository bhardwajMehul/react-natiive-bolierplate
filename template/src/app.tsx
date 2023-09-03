import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';

import { Navigator } from './navigation';

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigator />
    </View>
  );
};
