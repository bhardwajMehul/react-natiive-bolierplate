import React, { useEffect } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { css } from '@emotion/native';

export const Splash = ({ navigation }) => {
  useEffect(() => {
    // TODO: perform actions and navigate to tabs
    setTimeout(() => {
      navigation?.replace?.('LoggedInTabs');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={container}>
      <Text>This is Splash Screen, replace with your custom loader</Text>
    </SafeAreaView>
  );
};

const container = css({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
