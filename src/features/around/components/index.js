import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import MarkersList from './MarkersList';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});


const Around = props => (
  <View style={styles.container}>
     <MapView style={styles.map}>
        <MarkersList places={props.places} />
     </MapView>
  </View>
);

export default Around;
