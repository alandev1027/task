import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import { AppNavigator, middleware } from './src/navigators/AppNavigator';


import { YellowBox } from 'react-native';

const store = createStore(AppReducer, applyMiddleware(middleware));

class TaskManagementApp extends React.Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default TaskManagementApp;
