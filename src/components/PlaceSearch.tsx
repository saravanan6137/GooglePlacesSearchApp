import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { saveHistory } from '@/utils/utilityHistory';

//Search component for Google Places
//This component allows users to search for places and saves the search history
//It uses the Google Places Autocomplete API to fetch place details
export const PlaceSearch = ({
  onPlaceSelected,
}: {
  onPlaceSelected: (details: any) => void;
}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search for places"
      fetchDetails
      onPress={(data, details = null) => {
        console.log(data, details);
        if (details) {
          onPlaceSelected(details);
          saveHistory([details?.name]);
        }
      }}
      query={{
        key: 'YOUR_API_KEY',
        language: 'en',
      }}
    />
  );
};
