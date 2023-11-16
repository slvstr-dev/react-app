import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

import { TabBarIcon } from '@/components/TabBarIcon/TabBarIcon';
import { TabBarLabel } from '@/components/TabBarLabel/TabBarLabel';
import { theme } from '@/constants/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleStyle: {
          color: theme.colors.body.light,
        },
        headerTransparent: true,
        headerBackground: () => (
          <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />
        ),
        tabBarStyle: { position: 'absolute', borderTopWidth: 0 },
        tabBarBackground: () => (
          <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
        ),
      }}>
      <Tabs.Screen
        name="updates"
        options={{
          headerTitle: 'Updates',
          tabBarLabel: ({ focused }) => <TabBarLabel isFocused={focused}>Updates</TabBarLabel>,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="flash" focusedIcon="flash-outline" isFocused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          headerTitle: 'Calls',
          tabBarLabel: ({ focused }) => <TabBarLabel isFocused={focused}>Calls</TabBarLabel>,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="call" focusedIcon="call-outline" isFocused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          headerTitle: 'Communities',
          tabBarLabel: ({ focused }) => <TabBarLabel isFocused={focused}>Communities</TabBarLabel>,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="people" focusedIcon="people-outline" isFocused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Chats',
          tabBarLabel: ({ focused }) => <TabBarLabel isFocused={focused}>Chats</TabBarLabel>,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon="chatbubbles" focusedIcon="chatbubbles-outline" isFocused={focused} />
          ),
        }}
      />

      <Tabs.Screen
        name="you"
        options={{
          headerTitle: 'You',
          tabBarLabel: ({ focused }) => <TabBarLabel isFocused={focused}>You</TabBarLabel>,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon="ios-person-circle"
              focusedIcon="ios-person-circle-outline"
              isFocused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
