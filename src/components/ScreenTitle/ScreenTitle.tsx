import React, { PropsWithChildren } from 'react';
import { Text } from 'react-native';

import { cn } from '@/utils/tailwindUtils';

interface ScreenTitleProps extends PropsWithChildren {
  className?: string;
}

export const ScreenTitle = ({ children, className }: ScreenTitleProps) => {
  return (
    <Text className={cn('text-4xl font-bold text-dark dark:text-light', className)}>
      {children}
    </Text>
  );
};
