import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  item: {
    fontSize: 32
  },
  itemVisited: {
    textDecorationLine: "line-through"
  }
});

const PlaceItem = styled.Text`
  font-size: 32;
  color: #FFF;
`;

const Item = props => {
  const itemStyle = props.visited
    ? [styles.item, styles.itemVisited]
    : styles.item;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <PlaceItem style={itemStyle}>{props.label}</PlaceItem>
    </TouchableOpacity>
  );
};

export default Item;
