import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation'
import LoginScreen from './LoginScreen'

export default createStackNavigator({
    Login: {screen: LoginScreen},
  },
  {
    headerMode: 'none'
  }
)