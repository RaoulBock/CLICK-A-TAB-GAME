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
import { STATUS } from "../Context/settings";
import StatusCard from "../Components/Card/StatusCard";

const HomeScreen = () => {
  return (
    <View style={styles.outline}>
      <Nav />
      <ScrollView horizontal style={{ marginVertical: 10 }}>
        {STATUS.map((e, i) => {
          return <StatusCard key={i} item={e} />;
        })}
      </ScrollView>
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
