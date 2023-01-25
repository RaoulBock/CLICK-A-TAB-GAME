import React from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: "",
  setNavPage: (val) => {},
});

const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = React.useState(APP_PAGES.APP.HOME);
  const [tab, setTab] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        tab,
        setTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
