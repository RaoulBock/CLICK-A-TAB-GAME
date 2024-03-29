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
import { APP_ICONS } from "../Context/settings";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const [playerOne, setPlayerOne] = React.useState(0);
  const [seconds, setSeconds] = React.useState(30);
  const [score, setScore] = React.useState(0);
  const [gameStart, setGameStart] = React.useState(false);

  const [highScore, setHighScore] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 999);

    if (seconds < 1) {
      setSeconds(0);
      setScore(playerOne);
    }

    return () => clearInterval(interval);
  }, [seconds]);

  React.useEffect(() => {}, [playerOne]);

  if (score > highScore) {
    setHighScore(score);
  }

  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Text style={[styles.title, { padding: 0 }]}>
          Your high score is: {highScore}
        </Text>
        <Text style={[styles.title, { padding: 0 }]}>
          {seconds} seconds left
        </Text>
      </View>

      {seconds > 0 ? (
        <TouchableOpacity
          onPress={() => setPlayerOne(playerOne + 1)}
          style={[
            styles.view,
            { flex: 1, alignItems: "center", justifyContent: "center" },
          ]}
          activeOpacity={1}
        >
          <Text style={styles.text}>{playerOne}</Text>
          <Text style={[styles.text, { fontSize: 12 }]}>KEEP TAPPING</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={[
            styles.view,
            { flex: 1, alignItems: "center", justifyContent: "center" },
          ]}
        >
           <Text style={[styles.text, { fontSize: 12 }]}>GAME OVER</Text>
          <Text style={styles.text}>{playerOne}</Text>
          <TouchableOpacity
            onPress={() => {
              setSeconds(30);
              setPlayerOne(0);
            }}
          >
            <Text>{APP_ICONS.REFRESH}</Text>
           
          </TouchableOpacity>
        </View>
      )}

      {/* {seconds < 1 && (
        <View style={styles.grid}>
          <Text style={styles.title}>Your score is: {score}</Text>
          <TouchableOpacity
            onPress={() => {
              setSeconds(30);
              setPlayerOne(0);
            }}
          >
            <Text>{APP_ICONS.REFRESH}</Text>
          </TouchableOpacity>
        </View>
      )} */}
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
    fontSize: 150,
  },
  title: {
    backgroundColor: "#778beb",
    color: "white",
    fontWeight: "900",
    padding: 10,
    textAlign: "right",
    fontSize: 16,
  },
  grid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#778beb",
    padding: 10,
  },
});
