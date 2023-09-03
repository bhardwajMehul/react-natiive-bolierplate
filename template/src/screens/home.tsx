import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { css } from '@emotion/native';

export const Home = () => {
  return (
    <SafeAreaView style={container}>
      <Text>This is home screen</Text>
    </SafeAreaView>
  );
};

const container = css({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
