import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // For tab icons
import { TransitionPresets } from '@react-navigation/stack'; // Import TransitionPresets for stack navigation
import HomeNavigation from './HomeNavigation';
import DisCoveryNavigation from './DisCoveryNavigation';
import CreateNavigation from './CreateNavigation';
import AirdropNavigattion from './AirdropNavigattion';
import ProfileNavigation from './ProfileNavigation';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconSize = focused ? 25 : 20;
  const iconColor = focused ? '#1e1e1e' : '#777';

  switch (routeName) {
    case 'home':
      return <Ionicons name="home" size={iconSize} color={iconColor} />;
    case 'discovery':
      return <Ionicons name="search" size={iconSize} color={iconColor} />;
    case 'create':
      return <Ionicons name="add-circle" size={iconSize} color={iconColor} />;
    case 'airdrop':
      return <Ionicons name="rocket" size={iconSize} color={iconColor} />;
    case 'profile':
      return <Ionicons name="person" size={iconSize} color={iconColor} />;
    default:
      return <Ionicons name="help-circle" size={iconSize} color={iconColor} />;
  }
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Tab bar icon configuration
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),

        // You can apply transition animations to stack navigation screens,
        // but these will not work for Bottom Tab Navigation directly
        headerShown: false, // Optionally hide headers on each tab

        // Customize tab bar styles
        tabBarStyle: {
          backgroundColor: '#1e1e1e', // Tab bar background color
          borderTopWidth: 0, // Hide the top border for cleaner UI
        },
        tabBarActiveTintColor: '#1e1e1e', // Active icon color
        tabBarInactiveTintColor: '#777', // Inactive icon color
        tabBarLabelStyle: {
          fontSize: 12, // Label style
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
