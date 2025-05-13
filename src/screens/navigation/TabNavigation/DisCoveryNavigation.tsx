import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import DiscoveryScreen from '../../tabs/discovery/DiscoveryScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromLeftIOS,
        
      }}
    >
      <Stack.Screen name="home" component={DiscoveryScreen} />
    </Stack.Navigator>
  );
}
