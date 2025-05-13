import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // ✅ Correct imports
import HomeScreen from '../../tabs/home/HomeScreen';


const Stack = createStackNavigator()

export default function HomeNavigation() {
  return (

         <Stack.Navigator screenOptions={{
        headerShown:false,
        ...TransitionPresets.SlideFromLeftIOS,
        animationEnable:true,
        gestureEnabled:true,
        gestureDirection:true
         }}>
      <Stack.Screen name='home' component={<HomeScreen/>}/>
         </Stack.Navigator>
  )
}