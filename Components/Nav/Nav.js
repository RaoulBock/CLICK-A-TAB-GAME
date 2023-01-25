import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const Nav = ({ title }) => {
  return (
    <View style={styles.outline}>
      <Text>{title}</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.btn}>
          <Text>{APP_ICONS.SEARCH}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, { marginHorizontal: 25 }]}>
          <Text>{APP_ICONS.MESSAGE}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>{APP_ICONS.NOTIFICATION}</Text>
        </TouchableOpacity>
      </View>
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
  grid: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#f7f9fb",
    padding: 10,
    borderRadius: 10,
  },
});
