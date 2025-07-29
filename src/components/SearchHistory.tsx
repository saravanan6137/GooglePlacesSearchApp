import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Placeholder } from './Placeholder';
import { NO_RECENT_SEARCHES } from '@constants/strings';
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
      <Placeholder placeholderImage={Assets.unavailable} placeholderText={NO_RECENT_SEARCHES} />
    );
  }

  return (
    <>
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
    </>
  );
});

const styles = StyleSheet.create({
  clearButton: {
    backgroundColor: '#f5d1d1ff',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    height: 30,
  },
  header: {
    textAlign: 'center',
    color: '#444',
  },
  list: {
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#dbdbdbff',
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
