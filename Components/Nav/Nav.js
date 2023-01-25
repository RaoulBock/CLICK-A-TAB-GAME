import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.ADD}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "600",
    fontSize: 24,
  },
  btn: {
    backgroundColor: "#eee",
    borderRadius: 50,
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
