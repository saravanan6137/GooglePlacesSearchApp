import { FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import React from 'react';
import { Placeholder } from './Placeholder';
import Assets from '@assets/index';
import { PlaceItem } from '@/types';

interface Props {
  history: PlaceItem[];
  onSelect: (location: PlaceItem) => void;
  clearHistory: () => void;
}
// SearchHistory component to display recent search history
// This component allows users to select a previously searched location
export const SearchHistory = React.memo(({ history, onSelect, clearHistory }: Props) => {
  if (!history.length) {
    return (
      <Placeholder placeholderImage={Assets.unavailable} placeholderText="No recent searches" />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => clearHistory()} style={styles.clearButton}>
        <Text style={styles.header}>Clear History</Text>
      </TouchableOpacity>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onSelect(item)}>
            <Text style={styles.text}>📍 {item?.name}</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: '100%',
  },
  clearButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    height: 40,
  },
  header: {
    textAlign: 'center',
    fontSize: 14,
    color: '#444',
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});
