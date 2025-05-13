import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import ProfileScreen from '../../tabs/profile/ProfileScreen';

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromLeftIOS,
       
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="home" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
