import MapView, { Marker } from 'react-native-maps';
import React from 'react';
import { StyleSheet } from 'react-native';

// PlaceInMap component to display a marker on the map for a given location
// This component uses react-native-maps to render a map with a marker at the specified latitude
interface Props {
    location: {
        latitude: number;
        longitude: number;
    };
}
export const PlaceInMap = React.memo(({ location }: Props) => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude: location?.latitude, longitude: location?.longitude }} />
    </MapView>
  );
});

const styles = StyleSheet.create({
  map: {
    flex: 1,
    marginTop: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
});
