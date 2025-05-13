import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import AirdropScreen from '../../tabs/airdrop/AirdropScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromLeftIOS,
        
      }}
    >
      <Stack.Screen name="home" component={AirdropScreen} />
    </Stack.Navigator>
  );
}
