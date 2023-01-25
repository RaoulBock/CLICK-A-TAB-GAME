import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav title={"in Stockholm"} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fdfdfd",
    margin: 10,
  },
});
