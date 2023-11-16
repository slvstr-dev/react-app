import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { ChatItem } from '@/components/ChatItem/ChatItem';
import { ScreenTitle } from '@/components/ScreenTitle/ScreenTitle';
import { User } from '@/types/interfaces';
import { fetchJSONPlaceholder } from '@/utils/fetchUtils';

export default function CallsPage() {
  const headerHeight = useHeaderHeight();
  const bottomTabBarHeight = useBottomTabBarHeight();

  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  if (!users) return null;

  const fetchUsers = async () => {
    try {
      const response = await fetchJSONPlaceholder('users');

      setUsers(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <Ionicons name="refresh" size={24} className="bg-brand-0 fill-light" />;

  return (
    <View
      className="h-full bg-background-light dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <FlatList
        data={users}
        contentContainerClassName="px-2 py-4"
        ListHeaderComponent={() => <ScreenTitle className="mb-4">Calls</ScreenTitle>}
        ItemSeparatorComponent={() => <View className="my-4 h-px bg-muted/50" />}
        renderItem={({ item }) => <ChatItem user={item} />}
      />
    </View>
  );
}
