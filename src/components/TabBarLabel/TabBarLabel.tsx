import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { cn } from '@/utils/tailwindUtils';

interface TabBarLabelProps extends PropsWithChildren {
  isFocused: boolean;
}

export const TabBarLabel = ({ children, isFocused }: TabBarLabelProps) => {
  return <Text className={cn('text-sm', isFocused ? 'text-info' : 'text-muted')}>{children}</Text>;
};
