import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from '../constants';
import { Welcome, Home } from '../screens'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.bg,
    },
};

const stackOption = {
    headerShown: false,
    gestureEnabled: false
}

const Stack = createNativeStackNavigator();

export default function NavigationRouter() {

  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={stackOption}>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}