/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen'
import GroupPhotoScreen from './src/components/GroupPhotoScreen';
import BrowsePhotoScreen from './src/components/BrowsePhotoScreen';
import PublishPhotoScreen from './src/components/PublishPhotoScreen';
import MakeMoneyScreen from './src/components/MakeMoneyScreen';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" 
        options={{headerShown: false}}
        component={HomeScreen} />
      <Stack.Screen name="GroupPhoto"
        options={{headerShown: false}}
        component={GroupPhotoScreen} />
      <Stack.Screen name="BrowsePhoto" 
        options={{headerShown: false}}
        component={BrowsePhotoScreen} />
      <Stack.Screen name="PublishPhoto" 
        options={{headerShown: false}}
        component={PublishPhotoScreen} />
      <Stack.Screen name="MakeMoney" 
        options={{headerShown: false}}
        component={MakeMoneyScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return <NavigationContainer>{RootStack()}</NavigationContainer>;
}
