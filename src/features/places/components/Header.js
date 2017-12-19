import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "./Input";
import styled from 'styled-components/native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
  },
  headerText: {
    color: "#FFF"
  }
});

const HeaderView = styled.View`
  background-color: #000;
  color: #FFF;
  align-items: center;
  justify-content: center;
  height: 80;
  width: 100%;
`;

const Header = props => (
  <HeaderView>
    <Input onAdd={props.onAdd} />
  </HeaderView>
);
export default Header;
