import Config from 'react-native-config';
import React from 'react';
import { SEARCH_FOR_PLACES } from '@constants/strings';
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
  return (
      <GooglePlacesTextInput
        placeHolderText={SEARCH_FOR_PLACES}
        fetchDetails={true}
        apiKey={api_key ?? ''}
        onPlaceSelect={(place) => {
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
      />
  );
});
