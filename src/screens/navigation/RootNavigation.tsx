import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // ✅ Correct imports

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
// import { useAuth } from '@/AuthProvider';

const Stack = createStackNavigator();

export default function RootNavigation() {
  const [session, setSession] = useState(true); // Toggle to false to test auth flow

  // const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1e1e1e' },
          headerTintColor: '#fff',
         headerShown:false, // 👈 Hide header if not needed
          cardStyle: { backgroundColor: '#121212' },
          ...TransitionPresets.SlideFromRightIOS, // ✅ Apply transition
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        {/* {isAuthenticated ? (
        <Stack.Screen name="main" component={AppNavigation} />
        ) : (
          <Stack.Screen name="GoogleAuth" component={AuthNavigation} />
        )} */}
        {session ? (
        <Stack.Screen name="main" component={AppNavigation} />
        ) : (
          <Stack.Screen name="GoogleAuth" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
