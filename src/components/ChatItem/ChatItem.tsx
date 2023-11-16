import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { User } from '@/types/interfaces';

interface ChatItemProps {
  user: User;
}

export const ChatItem = ({ user }: ChatItemProps) => {
  return (
    <TouchableOpacity>
      <View className="flex-row items-center gap-4 px-2">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-muted/25">
          <Text className="text-2xl font-bold uppercase text-muted">
            {user.name?.[0]}
            {user.name?.[1]}
          </Text>
        </View>

        <View className="flex-1 gap-2">
          <View className="flex-row items-center justify-between">
            <Text className="flex-shrink text-lg font-bold text-body-light" numberOfLines={1}>
              {user.name}
            </Text>

            <Text className="shrink-0 text-muted">Someday</Text>
          </View>

          <Text className="text-body-light" numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut tempora possimus saepe,
            neque, similique quae tenetur molestias nulla est autem porro facilis sapiente illo non
            labore eos omnis animi.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
