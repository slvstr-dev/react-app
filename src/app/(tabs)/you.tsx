import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { IconButton } from '@/components/IconButton/IconButton';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { USER_NAME } from '@/constants/config';

export default function YouPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <View
      className="h-full bg-background-brand dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <View className="gap-10">
          <SearchInput />

          <View className="items-center gap-4">
            <View className="h-32 w-32 items-center justify-center rounded-full bg-muted/25">
              <Text className="pt-2.5 text-5xl font-bold uppercase text-body-dark/50 dark:text-muted">
                {USER_NAME[0]}
                {USER_NAME[1]}
              </Text>
            </View>

            <View className="items-center gap-1">
              <Text className="text-4xl font-bold text-dark dark:text-light">You</Text>

              <Text className="font-light text-dark/50 dark:text-light">Status</Text>
            </View>
          </View>

          <View className="flex-row gap-4 px-6">
            <IconButton className="flex-1" label="Profile" icon="ios-person-circle-outline" />

            <IconButton className="flex-1" label="Privacy" icon="ios-lock-closed" />

            <IconButton className="flex-1" label="Contacts" icon="ios-book" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
