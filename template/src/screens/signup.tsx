import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { css } from '@emotion/native';

export const SignUp = ({ navigation }) => {
  return (
    <SafeAreaView style={container}>
      <Text>This is SignUp screen</Text>
      <TouchableOpacity onPress={() => navigation.replace('LoggedOutStack')}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const container = css({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
