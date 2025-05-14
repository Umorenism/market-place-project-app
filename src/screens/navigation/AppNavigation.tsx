import React from 'react';
 import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // ✅ Correct imports
 
import TabNavigation from './TabNavigation'; // Bottom tabs with Home, Profile, etc.

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator  screenOptions={{
              headerStyle: { backgroundColor: '#1e1e1e' },
              headerTintColor: '#fff',
              headerShown:false,
              cardStyle: { backgroundColor: '#121212' },
              ...TransitionPresets.SlideFromRightIOS, // ✅ Apply transition
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}>
      <Stack.Screen name="Tabs" component={TabNavigation} />
      {/* Add more app-specific screens here if needed */}
    </Stack.Navigator>
  );
}
