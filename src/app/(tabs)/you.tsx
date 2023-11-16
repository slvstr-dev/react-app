import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { SearchInput } from '@/components/SearchInput/SearchInput';

export default function YouPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      className={`h-full bg-background-light dark:bg-dark`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <View className="p-2">
        <SearchInput />
      </View>
    </ScrollView>
  );
}
