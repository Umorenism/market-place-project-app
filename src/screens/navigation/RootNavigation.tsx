import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // ✅ Correct imports

import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

export default function RootNavigation() {
  const [session, setSession] = useState(true); // Toggle to false to test auth flow

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1e1e1e' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#121212' },
          ...TransitionPresets.SlideFromRightIOS, // ✅ Apply transition
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        {session ? (
          <Stack.Screen name="Main" component={TabNavigation} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
