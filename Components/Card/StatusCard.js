import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusCard = ({ item }) => {
  return (
    <View style={styles.outline}>
      <Image source={{ uri: item.img }} style={styles.img} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

export default StatusCard;

const styles = StyleSheet.create({
  outline: {
    marginHorizontal: 10,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    color: "#404040",
    marginTop: 10,
  },
});
