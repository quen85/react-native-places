import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import HomerSimpson from "../../shared-ui/Icon/svg/HomerSimpson";
import Swiper from 'react-native-swiper';
import Button from "../../shared-ui/Button";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 48,
    color: "#000"
  },
  textRegular: {
      fontFamily: 'Poppins-Medium',
      fontSize: 48,
    color: "#000"
   },
    textLight: {
          fontFamily: 'Poppins-Light',
          fontSize: 48,
    color: "#000"
        },
});

const Home = ({ navigation }) => (
      <Swiper showsButtons={false}>
        <View style={styles.view}>
            <Text style={styles.textBold}>Welcome</Text>
            <Text style={styles.textRegular}>on</Text>
            <Text style={styles.textLight}>Places</Text>
            <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
          </View>
        <View style={styles.view}>
          <Text style={styles.textBold}>Share it</Text>
          <Text style={styles.textRegular}>with your friends</Text>
          <HomerSimpson></HomerSimpson>
        </View>
        <View style={styles.view}>
          <Svg
                  height="100"
                  width="100"
              >
                  <Circle
                      cx="50"
                      cy="50"
                      r="50"
                      fill="pink"
                  />
              </Svg>
              <Text style={styles.textBold}>Save your</Text>
                          <Text style={styles.textRegular}>favorite</Text>
                          <Text style={styles.textBold}>Places</Text>
        </View>
      </Swiper>
);

export default Home;
