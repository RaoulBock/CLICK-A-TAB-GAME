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
  const [playerOne, setPlayerOne] = React.useState(0);
  const [seconds, setSeconds] = React.useState(30);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 999);

    if (seconds < 1) {
      setSeconds(0);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  React.useEffect(() => {}, [playerOne]);

  return (
    <View style={styles.outline}>
      <Text style={styles.title}>{seconds} seconds left</Text>
      <TouchableOpacity
        onPress={() => setPlayerOne(playerOne + 1)}
        style={[
          styles.view,
          { flex: 1, alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text style={styles.text}>{playerOne}</Text>
      </TouchableOpacity>
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
    backgroundColor: "#778beb",
  },
  text: {
    color: "white",
    fontSize: 100,
  },
  title: {
    backgroundColor: "#778beb",
    color: "white",
    fontWeight: "600",
    padding: 10,
    textAlign: "right",
  },
});
