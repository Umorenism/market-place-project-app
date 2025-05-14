import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import DisCoveryNavigation from "./DisCoveryNavigation";
import CreateNavigation from "./CreateNavigation";
import AirdropNavigattion from "./AirdropNavigattion";
import ProfileNavigation from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconSize = focused ? 25 : 20;
  const iconColor = focused ? "#1e1e1e" : "#777";

  switch (routeName) {
    case "home":
      return <Ionicons name="home" size={iconSize} color={iconColor} />;
    case "discovery":
      return <Ionicons name="search" size={iconSize} color={iconColor} />;
    case "create":
      return <Ionicons name="add-circle" size={iconSize} color={iconColor} />;
    case "airdrop":
      return <Ionicons name="rocket" size={iconSize} color={iconColor} />;
    case "profile":
      return <Ionicons name="person" size={iconSize} color={iconColor} />;
    default:
      return <Ionicons name="help-circle" size={iconSize} color={iconColor} />;
  }
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#ffffff", // Set your desired background color here
          borderTopWidth: 0,
          elevation: 5, // Android shadow
          shadowColor: "#000", // iOS shadow
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.05,
          shadowRadius: 6,
          height: 60,
        },
        tabBarActiveTintColor: "#1e1e1e",
        tabBarInactiveTintColor: "#777",
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeNavigation} />
      <Tab.Screen name="discovery" component={DisCoveryNavigation} />
      <Tab.Screen name="create" component={CreateNavigation} />
      <Tab.Screen name="airdrop" component={AirdropNavigattion} />
      <Tab.Screen name="profile" component={ProfileNavigation} />
    </Tab.Navigator>
  );
}
