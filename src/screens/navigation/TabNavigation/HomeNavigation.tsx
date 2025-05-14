import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../../tabs/home/HomeScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
     screenOptions={{
               headerStyle: { backgroundColor: '#1e1e1e' },
               headerTintColor: '#fff',
               headerShown:false,
               cardStyle: { backgroundColor: '#121212' },
               ...TransitionPresets.SlideFromRightIOS, // ✅ Apply transition
               gestureEnabled: true,
               gestureDirection: 'horizontal',
             }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
