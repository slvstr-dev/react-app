import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { cn } from '@/utils/tailwindUtils';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}>
      <Tabs.Screen
        name="updates"
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'flash' : 'flash-outline'}
              color={focused ? '#007AFF' : '#939393'}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          tabBarLabel: 'Calls',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'call' : 'call-outline'}
              color={focused ? '#007AFF' : '#939393'}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              color={focused ? '#007AFF' : '#939393'}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Chats',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              color={focused ? '#007AFF' : '#939393'}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="you"
        options={{
          tabBarLabel: 'You',
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'rounded-full w-6 h-6 border-[1.5px]',
                focused ? 'border-blue-500' : 'border-gray-400',
              )}
            />
          ),
        }}
      />
    </Tabs>
  );
}
