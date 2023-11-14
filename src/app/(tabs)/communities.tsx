import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <View className="h-full bg-background-light dark:bg-background-dark">
      <SafeAreaView>
        <Text className="text-dark dark:text-light">Communities</Text>
      </SafeAreaView>
    </View>
  );
}
