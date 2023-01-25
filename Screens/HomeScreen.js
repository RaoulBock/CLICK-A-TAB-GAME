import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.view}></TouchableOpacity>
      <TouchableOpacity style={styles.viewOne}></TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    height: "50%",
    backgroundColor: "#778beb",
  },
  viewOne: {
    height: "50%",
    backgroundColor: "#786fa6",
  },
});
