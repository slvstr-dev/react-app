import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import animalsData from '@/assets/data/animals.json';

export default function ChatsPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <View
      className="h-full bg-background-light dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <FlatList
        data={animalsData}
        contentContainerClassName="p-2"
        ListHeaderComponent={() => (
          <Text className={`text-dark dark:text-light text-4xl font-bold`}>Chats</Text>
        )}
        ItemSeparatorComponent={() => <View className="h-px bg-muted/50" />}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id}>
            <Text className="text-light px-2 py-4 font-bold">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
