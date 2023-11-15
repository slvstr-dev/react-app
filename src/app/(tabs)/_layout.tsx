import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

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
        headerBackgroundContainerStyle: {
          position: 'absolute',
        },
        headerBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        ),
        tabBarLabelStyle: {
          fontSize: 12,
          color: theme.colors.muted,
        },
        tabBarStyle: { position: 'absolute', borderTopWidth: 0 },
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          />
        ),
      }}>
      <Tabs.Screen
        name="updates"
        options={{
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
