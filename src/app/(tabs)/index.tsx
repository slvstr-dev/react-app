import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import animalsData from '@/assets/data/animals.json';

export default function Page() {
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <View className="h-full bg-background-light dark:bg-background-dark">
      <SafeAreaView edges={['top']}>
        <FlatList
          data={animalsData}
          ListHeaderComponent={() => <Text className="text-dark dark:text-light">Chats</Text>}
          ItemSeparatorComponent={() => <View className="h-px bg-brand-1" />}
          renderItem={({ item }) => (
            <Text key={item.id} className="text-light bg-brand-0 px-2 py-4">
              {item.name}
            </Text>
          )}
          ListFooterComponent={() => <View className={`mb-[${bottomTabBarHeight}px]`} />}
        />
      </SafeAreaView>
    </View>
  );
}
