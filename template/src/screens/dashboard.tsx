import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { css } from '@emotion/native';

export const Dashboard = () => {
  return (
    <SafeAreaView style={container}>
      <Text>This is Dashboard screen</Text>
    </SafeAreaView>
  );
};

const container = css({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
