import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { theme } from '@/constants/colors';
import { cn } from '@/utils/tailwindUtils';

interface IconButtonProps {
  className?: string;
  icon: keyof typeof Ionicons.glyphMap;
  label?: string;
}

export const IconButton = ({ className, icon, label }: IconButtonProps) => {
  return (
    <View
      className={cn(
        'items-center gap-1 rounded-xl bg-light p-4 transition active:opacity-20',
        className,
      )}>
      <Ionicons name={icon} size={20} color={theme.colors.info} />

      {label ? <Text className="text-xs font-light text-info dark:text-light">{label}</Text> : null}
    </View>
  );
};
