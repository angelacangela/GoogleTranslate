import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/homeScreen/index';
import SavedScreen from '../screens/savedScreen/index';
import SettingsScreen from '../screens/settingsScreen/index';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"md-home"}
    />
  ),
};

const SavedStack = createStackNavigator({
  Saved: SavedScreen,
});

SavedStack.navigationOptions = {
  tabBarLabel: 'Saved',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"md-star"}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"md-settings"}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  SavedStack,
  SettingsStack,
});
