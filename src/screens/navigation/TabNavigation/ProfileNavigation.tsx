import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import ProfileScreen from "../../tabs/profile/ProfileScreen";

const Stack = createStackNavigator();

export default function ProfileNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1e1e1e" },
        headerTintColor: "#fff",
        cardStyle: { backgroundColor: "#121212" },
        ...TransitionPresets.SlideFromRightIOS, // ✅ Apply transition
        gestureEnabled: true,
        gestureDirection: "horizontal",
      }}
    >
      <Stack.Screen name="home" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
