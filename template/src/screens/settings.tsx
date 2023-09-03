import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { css } from '@emotion/native';

export const Settings = (props) => {
  console.log('settings', props);
  return (
    <SafeAreaView style={container}>
      <Text>This is Settings screen</Text>
      <TouchableOpacity
        onPress={() => props.navigation.replace('LoggedInTabs')}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const container = css({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
