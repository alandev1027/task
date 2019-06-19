import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import InboxScreen from './InboxScreen';
import FolderScreen from './FolderScreen';
import WorkflowScreen from './WorkflowScreen';
import StartScreen from './StartScreen';
import WebViewScreen from './WebViewScreen';

export default createStackNavigator({
  mainScreen: createBottomTabNavigator({
      Inbox: createStackNavigator({
        root: InboxScreen,
        WebView: WebViewScreen
      }),
      Initiate: createStackNavigator({
        root: WorkflowScreen,
        WebView: WebViewScreen
      }),
      Browser: createStackNavigator({
        root: FolderScreen,
        WebView: WebViewScreen
      })
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Inbox') {
            iconName = `md-mail`;
            //iconName = `ios-mail${focused ? '' : '-outline'}`;
          } else if (routeName === 'Start') {
            iconName = `md-add-circle${focused ? '' : ''}`;
          } else if (routeName === 'Initiate') {
            iconName = `md-stats${focused ? '' : ''}`;
          } else if (routeName === 'Browser') {
            iconName = `md-folder${focused ? '' : ''}`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
        headerTitle: 'Main'
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
  })},
  {
    headerMode: 'none'
  }
)
