import { StyleSheet, Platform } from 'react-native';
import Config from 'react-native-config';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import GooglePlacesTextInput from 'react-native-google-places-textinput';
import { PlaceItem } from '@/types';

//Search component for Google Places
//This component allows users to search for places and saves the search history
//It uses the Google Places Autocomplete API to fetch place details
export const PlaceSearch = React.memo(({
  onPlaceSelected,
}: {
  onPlaceSelected: (details: PlaceItem) => void;
}) => {
  const api_key = Config.GOOGLE_API_KEY;
  console.log('Google API Key:', api_key);
  return (
      <GooglePlacesTextInput
        placeHolderText="Search for places"
        fetchDetails={true}
        apiKey={api_key ?? ''}
        onPlaceSelect={(place) => {
          console.log('Selected Place:', place);
          const mappedPlace: PlaceItem = {
            name: place?.details?.displayName?.text || '',
            latitude: place?.details?.location?.latitude || 0,
            longitude: place?.details?.location?.longitude || 0,
          };
          onPlaceSelected(mappedPlace);
        }}
        onError={(error) => {
          console.error('Error fetching places:', error);
        }}
        // query={{
        //   key: api_key,
        //   language: 'en',
        // }}
        // predefinedPlaces={[]}
        // predefinedPlacesAlwaysVisible={false}
        // textInputProps={{
        //   placeholderTextColor: '#888',
        //   returnKeyType: 'search',
        //   onFocus: () => console.log('Input focused'),
        // }}
        // styles={{
        //   textInputContainer: styles.inputContainer,
        //   textInput: styles.textInput,
        //   listView: styles.listView,
        //   row: styles.row,
        //   separator: styles.separator,
        // }}
      />
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    fontSize: 16,
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  listView: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 8,
    elevation: 3,
  },
  row: {
    padding: 14,
    borderBottomWidth: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
});

