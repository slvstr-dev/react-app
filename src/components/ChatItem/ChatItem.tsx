import React from 'react';
import { Text, View } from 'react-native';

import { User } from '@/types/interfaces';
import { cn } from '@/utils/tailwindUtils';

interface ChatItemProps {
  className?: string;
  user: User;
}

export const ChatItem = ({ user, className }: ChatItemProps) => {
  return (
    <View
      className={cn('flex-row items-center gap-4 px-2 transition active:opacity-20', className)}>
      <View className="h-16 w-16 items-center justify-center rounded-full bg-muted/25">
        <Text className="text-2xl font-bold uppercase text-body-dark/50 dark:text-muted">
          {user.name?.[0]}
          {user.name?.[1]}
        </Text>
      </View>

      <View className="flex-1 gap-1">
        <View className="flex-row items-center justify-between">
          <Text
            className="flex-shrink font-semibold text-body-dark dark:text-body-light"
            numberOfLines={1}>
            {user.name}
          </Text>

          <Text className="shrink-0 text-sm font-light text-body-dark/50 dark:text-muted">
            Someday
          </Text>
        </View>

        <Text
          className="text-sm font-light leading-tight text-body-dark/50 dark:text-body-light"
          numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut tempora possimus saepe,
          neque, similique quae tenetur molestias nulla est autem porro facilis sapiente illo non
          labore eos omnis animi.
        </Text>
      </View>
    </View>
  );
};
