import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar
} from "react-native";

import PlaceList from "./PlaceList";
import Header from "./Header";
import Footer from "./Footer";
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  content: {
    flex: 0,
    alignItems: "center"
  }
});

const PlacesView = styled.View`
  background-color: #000;
  flex: 1;
`;

const Places = props => (
  <PlacesView>
    <Header onAdd={props.addItem} />
    <ScrollView contentContainerStyle={styles.content}>
      <PlaceList places={props.places} onSelectItem={props.onToggleItem} />
    </ScrollView>
  </PlacesView>
);
export default Places;
