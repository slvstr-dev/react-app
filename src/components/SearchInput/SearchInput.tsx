import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const SearchInput = () => {
  const [query, setQuery] = useState('');

  return (
    <View className="flex-row items-center rounded-xl bg-muted/25 p-2">
      <Ionicons name="search" size={16} className="pr-2 text-muted" />

      <TextInput
        className="text-body-light placeholder:text-muted"
        onChangeText={setQuery}
        value={query}
        placeholder="Search"
      />
    </View>
  );
};
