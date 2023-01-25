import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppContext } from "../../Context/AppContext";

const SlideNav = () => {
  const { tab, setTab } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <TouchableOpacity style={styles.btn} onPress={() => setTab(0)}>
        <Text style={tab === 0 ? styles.isActive : styles.text}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setTab(1)}>
        <Text style={tab === 1 ? styles.isActive : styles.text}>Parties</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setTab(2)}>
        <Text style={tab === 2 ? styles.isActive : styles.text}>Venues</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlideNav;

const styles = StyleSheet.create({
  outline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  text: {
    fontWeight: "600",
    color: "#b6b6b6",
    fontSize: 20,
    paddingVertical: 10,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  isActive: {
    fontWeight: "600",
    color: "#333",
    fontSize: 20,
    paddingVertical: 10,
    borderBottomColor: "#333",
    borderBottomWidth: 3,
    textAlign: "center",
  },
});
