import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

// PlaceInMap component to display a marker on the map for a given location
// This component uses react-native-maps to render a map with a marker at the specified latitude
export const PlaceInMap = ({ location }: { location: { latitude: number; longitude: number } }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker coordinate={{ latitude: location?.latitude, longitude: location?.longitude }} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
