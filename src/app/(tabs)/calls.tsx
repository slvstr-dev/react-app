import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import animalsData from '@/assets/data/animals.json';

export default function CallsPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <View className="h-full bg-background-light dark:bg-dark">
      <FlatList
        data={animalsData}
        contentContainerClassName="p-2"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text className={`text-4xl font-bold text-dark dark:text-light`}>Calls</Text>
        )}
        ItemSeparatorComponent={() => <View className="h-px bg-muted/50" />}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id}>
            <Text className="px-2 py-4 font-bold text-light">{item.name}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => <View />}
        ListHeaderComponentStyle={{ paddingTop: headerHeight }}
        ListFooterComponentStyle={{ marginBottom: bottomTabBarHeight }}
      />
    </View>
  );
}
