export const APP_PAGES = {
  APP: {
    HOME: "HOME",
  },
};

export const STATUS = [
  {
    id: 1,
    name: "Clara",
    img: "https://helpfulprofessor.com/wp-content/uploads/2022/10/French-woman-e1667050422125-1024x683.jpg",
  },
  {
    id: 2,
    name: "Steffie",
    img: "https://www.rd.com/wp-content/uploads/2019/09/shutterstock_748838587-scaled.jpg",
  },
];

import { Ionicons } from "react-native-vector-icons";
export const APP_ICONS = {
  SEARCH: (
    <Ionicons
      name={"ios-search-outline"}
      style={{ color: "#404040", fontSize: 27 }}
    />
  ),
  MESSAGE: (
    <Ionicons
      name={"ios-chatbubble-outline"}
      style={{ color: "#404040", fontSize: 25 }}
    />
  ),
  NOTIFICATION: (
    <Ionicons
      name={"ios-notifications-outline"}
      style={{ color: "#404040", fontSize: 25 }}
    />
  ),
  HOME: (
    <Ionicons
      name={"ios-home-outline"}
      style={{ color: "#404040", fontSize: 25 }}
    />
  ),
  FRIENDS: (
    <Ionicons
      name={"ios-people-outline"}
      style={{ color: "#404040", fontSize: 25 }}
    />
  ),
  USER: (
    <Ionicons
      name={"ios-person-outline"}
      style={{ color: "#404040", fontSize: 25 }}
    />
  ),
};
