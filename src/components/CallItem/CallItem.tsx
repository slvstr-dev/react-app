import React from 'react';
import { Text, View } from 'react-native';

import { User } from '@/types/interfaces';
import { cn } from '@/utils/tailwindUtils';

interface CallItemProps {
  className?: string;
  user: User;
}

export const CallItem = ({ user, className }: CallItemProps) => {
  return (
    <View
      className={cn('flex-row items-center gap-4 px-2 transition active:opacity-20', className)}>
      <View className="h-10 w-10 items-center justify-center rounded-full bg-muted/25">
        <Text className="text-lg font-bold uppercase text-body-dark/50 dark:text-muted">
          {user.name?.[0]}
          {user.name?.[1]}
        </Text>
      </View>

      <View className="flex-1 flex-row items-center justify-between">
        <View>
          <Text
            className="flex-shrink text-sm text-body-dark dark:text-body-light"
            numberOfLines={1}>
            {user.name}
          </Text>

          <Text className="shrink-0 text-sm font-light text-body-dark/50 dark:text-muted">
            XX/XX/XXXX
          </Text>
        </View>

        <Text className="shrink-0 text-sm font-light text-body-dark/50 dark:text-muted">
          Outgoing
        </Text>
      </View>
    </View>
  );
};
