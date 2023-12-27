import React from "react";
import { StatusBar } from "react-native";
import AppProvider, { AppContext } from "./Context/AppContext";
import { APP_PAGES } from "./Context/settings";

import HomeScreen from "./Screens/HomeScreen";
import Dashboard from "./Screens/Dashboard";

function App() {
  return (
    <AppProvider>
      <NavWrapper />
    </AppProvider>
  );
}

const NavWrapper = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
  const onSetNavPage = (e) => {
    setNavPage(e);
  };

  React.useEffect(() => {
    console.log("App Nav: ", navPage);
  }, [navPage]);

  return (
    <>
      <StatusBar
        style="light"
        barStyle={"light-content"}
        backgroundColor={"#778beb"}
        hidden={false}
        translucent={true}
      />

      {navPage === APP_PAGES.APP.HOME && <HomeScreen />}
      {navPage === APP_PAGES.APP.DASHBOARD && <Dashboard />}
    </>
  );
};

export default App;
