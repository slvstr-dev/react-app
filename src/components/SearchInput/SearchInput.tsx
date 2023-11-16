import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export const SearchInput = () => {
  const [query, setQuery] = useState('');

  return (
    <View className="bg-muted/25 rounded-xl p-2 flex-row items-center">
      <Ionicons name="search" size={16} className="text-muted pr-2" />

      <TextInput
        className="text-body-light placeholder:text-muted"
        onChangeText={setQuery}
        value={query}
        placeholder="Search"
      />
    </View>
  );
};
