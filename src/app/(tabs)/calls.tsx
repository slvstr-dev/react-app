import { Ionicons } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import { Fragment, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { CallItem } from '@/components/CallItem/CallItem';
import { Heading } from '@/components/ScreenTitle/ScreenTitle';
import { SearchInput } from '@/components/SearchInput/SearchInput';
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
      className="h-full bg-background-brand dark:bg-dark"
      style={{ paddingTop: headerHeight, paddingBottom: bottomTabBarHeight }}>
      <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
        <View className="mb-4 gap-4">
          <Heading>Calls</Heading>

          <SearchInput />

          <Heading size="subtitle">Recent</Heading>
        </View>

        <View className="mb-10 gap-3 rounded-xl bg-light px-2 py-4">
          {users.map((user, idx) => {
            const hasSeperator = idx !== users.length - 1;

            return (
              <Fragment key={user.id}>
                <CallItem user={user} />

                {hasSeperator && <View className="h-px bg-muted/50" />}
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
