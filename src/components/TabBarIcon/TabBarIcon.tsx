import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { theme } from '@/constants/colors';

interface TabBarIconProps {
  icon: keyof typeof Ionicons.glyphMap;
  focusedIcon: keyof typeof Ionicons.glyphMap;
  isFocused: boolean;
}

export const TabBarIcon = ({ icon, focusedIcon, isFocused }: TabBarIconProps) => {
  return (
    <Ionicons
      name={isFocused ? focusedIcon : icon}
      color={isFocused ? theme.colors.info : theme.colors.muted}
      size={24}
    />
  );
};
