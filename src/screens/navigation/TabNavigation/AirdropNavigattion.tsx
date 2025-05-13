import { View, Text } from 'react-native'
import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // ✅ Correct imports
import HomeScreen from '../../tabs/home/HomeScreen';
import AirdropScreen from '../../tabs/airdrop/AirdropScreen';


const Stack = createStackNavigator()

export default function AirdropNavigattion() {
  return (

         <Stack.Navigator screenOptions={{
        headerShown:false,
        ...TransitionPresets.SlideFromLeftIOS,
        animationEnable:true,
        gestureEnabled:true,
        gestureDirection:true
         }}>
      <Stack.Screen name='airdrop' component={<AirdropScreen/>}/>
         </Stack.Navigator>
  )
}