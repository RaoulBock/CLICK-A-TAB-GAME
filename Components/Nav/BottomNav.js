import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { APP_ICONS } from "../../Context/settings";

const BottomNav = () => {
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.HOME}</Text>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.SEARCH}</Text>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.FRIENDS}</Text>
        <Text style={styles.text}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>{APP_ICONS.USER}</Text>
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    color: "#333",
    paddingHorizontal: 6,
  },
});
