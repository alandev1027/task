import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../screens/auth/LoginScreen';
import MainScreen from '../screens/main/';
import ProfileScreen from '../screens/ProfileScreen';
import AuthStack from '../screens/auth';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createSwitchNavigator({
  Auth: {screen: AuthStack},
  App: { screen: MainScreen},
  Profile: { screen: ProfileScreen },
}, {
  headerMode: 'none'
}
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
