import MapView, { Marker, Callout } from 'react-native-maps';
import React from 'react';
import { PlaceItem } from '@/types';
import { StyleSheet, View, Text } from 'react-native';

// PlaceInMap component to display a marker on the map for a given location
// This component uses react-native-maps to render a map with a marker at the specified latitude
interface Props {
  location: PlaceItem;
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
      <Marker key={`${location?.latitude}-${location?.longitude}`} coordinate={{ latitude: location?.latitude, longitude: location?.longitude }}>
        <Callout>
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutText} numberOfLines={3}>{location?.address}</Text>
          </View>
        </Callout>
      </Marker>
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
  calloutContainer: {
    width: 200,
  },
  calloutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
