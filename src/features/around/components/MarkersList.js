import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';

const MarkersList = props => {
  return props.places.map((item, index) => {
    return (
        <MapView.Marker
            coordinate={item.position}
            title={item.label}
            description={item.label}
            key={item.id}
        />
    );
  });
};

export default MarkersList;