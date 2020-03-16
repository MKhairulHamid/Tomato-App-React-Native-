import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import StackNav from './StackNav'
import LogOut from '../components/LogOut';

const Tab = createBottomTabNavigator();

export default (props) => {
    return (
        <Tab.Navigator
            initialRouteName="StackNav"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'StackNav') {
                    iconName = 'home';
                  } else if (route.name === 'LogOut') {
                    iconName = 'account-box';
                  }
      
                  // You can return any component that you like here!
                  return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="StackNav" component={StackNav} />
            <Tab.Screen name="LogOut" component={LogOut} />
        </Tab.Navigator>
    )
}
