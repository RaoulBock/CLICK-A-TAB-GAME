import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Nav from "../Components/Nav/Nav";
import { AppContext } from "../Context/AppContext";
import { APP_PAGES } from "../Context/settings";

const CreateScreen = () => {
  const { setNavPage } = React.useContext(AppContext);
  return (
    <View style={styles.outline}>
      <Nav
        title={"in Stockholm"}
        icon={"X"}
        onPress={() => setNavPage(APP_PAGES.APP.HOME)}
      />
      <TouchableOpacity style={styles.view}>
        <Text>Go Out Tonight</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.viewOne}>
        <Text>I Am Hosting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  outline: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  view: {
    backgroundColor: "red",
    height: "50%",
  },
  viewOne: {
    backgroundColor: "pink",
    height: "50%",
  },
});
