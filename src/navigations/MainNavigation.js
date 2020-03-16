import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import TabNav from '../navigations/TabNav'

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator 
          initialRouteName="Login"
          headerMode="none"
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TabNav" component={TabNav} />
        </Stack.Navigator>
    )
}