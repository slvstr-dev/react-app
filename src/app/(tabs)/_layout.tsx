import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { View, StyleSheet } from 'react-native';

import { theme } from '@/constants/colors';
import { cn } from '@/utils/tailwindUtils';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          color: theme.colors.muted,
        },
        headerTransparent: true,
        headerBackground: () => (
          <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          color: theme.colors.muted,
        },
        tabBarStyle: { position: 'absolute', borderTopWidth: 0 },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tabs.Screen
        name="updates"
        options={{
          headerTitle: 'Updates',
          tabBarLabel: 'Updates',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'flash' : 'flash-outline'}
              color={focused ? theme.colors.info : theme.colors.muted}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          headerTitle: 'Calls',
          tabBarLabel: 'Calls',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'call' : 'call-outline'}
              color={focused ? theme.colors.info : theme.colors.muted}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          headerTitle: 'Communities',
          tabBarLabel: 'Communities',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              color={focused ? theme.colors.info : theme.colors.muted}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Chats',
          tabBarLabel: 'Chats',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
              color={focused ? theme.colors.info : theme.colors.muted}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="you"
        options={{
          headerTitle: 'You',
          tabBarLabel: 'You',
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'rounded-full w-6 h-6 border-[1.5px]',
                focused ? 'border-info' : 'border-muted',
              )}
            />
          ),
        }}
      />
    </Tabs>
  );
}
