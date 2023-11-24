import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function CommunitiesPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  return (
    <View
      className="h-full bg-light dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <View className="gap-10">
          <Text className={`text-4xl font-bold text-dark dark:text-light`}>Communities</Text>
        </View>
      </ScrollView>
    </View>
  );
}
