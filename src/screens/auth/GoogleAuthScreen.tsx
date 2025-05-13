import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// 1. Define your stack params
type RootStackParamList = {
  Auth: undefined;
  Main: undefined; // or 'Home', 'Dashboard', etc.
};

// 2. Type the navigation
type GoogleAuthScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Auth'
>;

export default function GoogleAuthScreen() {
  const navigation = useNavigation<GoogleAuthScreenNavigationProp>();

  const handleSignup = () => {
    // Simulate Google signup logic
    console.log('User signed in ✅');

    // Navigate to the home screen or main app
    navigation.navigate('Main'); // or 'Home' if that's your route name
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GoogleAuthScreen</Text>
      <Button title="Sign in with Google" onPress={handleSignup} />
    </View>
  );
}
