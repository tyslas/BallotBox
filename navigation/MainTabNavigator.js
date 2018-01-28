import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import LoginScreen from '../screens/LoginScreen';
import BallotScreen from '../screens/BallotScreen';
import InfoScreen from '../screens/InfoScreen';

export default TabNavigator(
  {
    Home: {
      screen: LoginScreen,
    },
    Ballot: {
      screen: BallotScreen,
    },
    Info: {
      screen: InfoScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-log-in${focused ? '' : '-outline'}`
                : 'md-log-in';
            break;
          case 'Ballot':
            iconName =
              Platform.OS === 'ios'
              ? `ios-checkmark-circle${focused ? '' : '-outline'}`
              : 'md-checkmark-circle';
            break;
          case 'Info':
            iconName =
              Platform.OS === 'ios'
              ? `ios-book${focused ? '' : '-outline'}`
              : 'md-book';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
