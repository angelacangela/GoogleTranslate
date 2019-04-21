import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SourceLanguageSelector from "../screens/sourceLanguageSelector/index";
import TargetLanguageSelector from "../screens/targetLanguageSelector/index";
import MainTabNavigator from './MainTabNavigator';
// import Feedback from './Feedback';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  SourceLanguageSelector: SourceLanguageSelector,
  TargetLanguageSelector: TargetLanguageSelector
}));
