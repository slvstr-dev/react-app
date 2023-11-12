import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

import { cn } from '@/utils/tailwindUtils';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
              color={focused ? 'rgb(14 125 214)' : 'rgb(223 230 236)'}
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
              color={focused ? 'rgb(14 125 214)' : 'rgb(223 230 236)'}
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
              color={focused ? 'rgb(14 125 214)' : 'rgb(223 230 236)'}
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
              color={focused ? 'rgb(14 125 214)' : 'rgb(223 230 236)'}
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
                focused ? 'border-primary' : 'border-secondary',
              )}
            />
          ),
        }}
      />
    </Tabs>
  );
}
