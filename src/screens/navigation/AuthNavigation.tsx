import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import GoogleAuthScreen from '../auth/GoogleAuthScreen';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1e1e1e' },
        headerTintColor: '#fff',
        headerShown:false,
        cardStyle: { backgroundColor: '#121212' },
        ...TransitionPresets.SlideFromRightIOS, // ✅ Only works with createStackNavigator
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="auth" component={GoogleAuthScreen} />
    </Stack.Navigator>
  );
}
