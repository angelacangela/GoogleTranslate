import { Platform, StyleSheet, ScrollView } from "react-native";

export default StyleSheet.create({
  separator: {
    backgroundColor: "#e6e6e6",
    height: StyleSheet.hairlineWidth
  },
  languageCategory: {
    color: "gray",
    fontSize: 11,
    fontWeight: "500",
  },
  languageSelection: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 38,
    paddingVertical: 20,
    fontSize: 25,
  },
  languageSpecific: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    fontSize: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },

});
