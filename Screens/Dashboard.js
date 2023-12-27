import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform,
  StatusBar,
  Animated,
} from "react-native";
import { APP_ICONS, APP_PAGES } from "../Context/settings";
import { AppContext } from "../Context/AppContext";

const Dashboard = () => {
  const scaleValue = React.useRef(new Animated.Value(1)).current;

  const { setNavPage } = React.useContext(AppContext);

  const startScaleAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.5, // Scale down to 0.5 times
        duration: 200, // Duration of the animation
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // Scale back to the original size
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <View style={styles.outline}>
      <View style={styles.grid}>
        <Text style={styles.header}>Click a Tab</Text>
        <TouchableOpacity
          onPress={() => {
            startScaleAnimation();
            setNavPage(APP_PAGES.APP.HOME);
          }}
        >
          <Animated.Text style={[animatedStyle]}>
            {APP_ICONS.PLAY}
          </Animated.Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#778beb",
    padding: 10,
    flex: 1,
  },
  header: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 70,
  },
});
