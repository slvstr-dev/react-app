import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Fragment, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ChatItem } from '@/components/ChatItem/ChatItem';
import { Heading } from '@/components/ScreenTitle/ScreenTitle';
import { User } from '@/types/interfaces';
import { fetchJSONPlaceholder } from '@/utils/fetchUtils';

export default function ChatsPage() {
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
      className="bg-white h-full dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <Heading className="mb-4">Chats</Heading>

        <View className="mb-10 gap-3 rounded-xl bg-light px-2 py-4">
          {users.map((user, idx) => {
            const hasSeperator = idx !== users.length - 1;

            return (
              <Fragment key={user.id}>
                <ChatItem user={user} />

                {hasSeperator && <View className="h-px bg-muted/50" />}
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
