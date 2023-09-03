import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Screens from './screens';

export const NavigationRef = useNavigationContainerRef();

const commonScreenOptions = { screenOptions: { headerShown: false } };

const Stack = createNativeStackNavigator();
// const LoggedOutStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const DashboardStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator {...commonScreenOptions}>
      <HomeStack.Screen name="base" component={Screens.Home} />
    </HomeStack.Navigator>
  );
};

const Dashboard = () => {
  return (
    <DashboardStack.Navigator {...commonScreenOptions}>
      <DashboardStack.Screen name="base" component={Screens.Dashboard} />
    </DashboardStack.Navigator>
  );
};

const Settings = () => {
  return (
    <SettingsStack.Navigator {...commonScreenOptions}>
      <SettingsStack.Screen name="base" component={Screens.Settings} />
    </SettingsStack.Navigator>
  );
};

const LoggedOutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Screens.SignUp} />
    </Stack.Navigator>
  );
};

const LoggedInTabs = () => {
  return (
    <Tab.Navigator {...commonScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer ref={NavigationRef}>
      <Stack.Navigator {...commonScreenOptions}>
        <Stack.Screen name="Splash" component={Screens.Splash} />
        <Stack.Screen name="LoggedOutStack" component={LoggedOutStack} />
        <Stack.Screen name="LoggedInTabs" component={LoggedInTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
