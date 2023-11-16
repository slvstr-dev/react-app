import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function UpdatesPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      className={`h-full bg-background-light dark:bg-dark`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <View className="p-2">
        <Text className={`text-dark dark:text-light text-4xl font-bold`}>Updates</Text>
      </View>
    </ScrollView>
  );
}
