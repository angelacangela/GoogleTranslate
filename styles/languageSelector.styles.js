import { Platform, StyleSheet, ScrollView } from "react-native";

export default StyleSheet.create({
  allLanguages: {
    display: "flex",
    flexDirection: "row",
  },
  downloadButton: {
    display: "flex",
    flexDirection: "row",
    fontSize: 22,
    textAlign: "right",
    marginLeft: 320,
    paddingBottom: 30,
    marginBottom: 30,
  },
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
    height: 50,
    paddingTop: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 44,
    paddingVertical: 20,
    textAlign: "center",
    marginTop: 15,
  },
  languageSpecific: {
    color: "black",
    display: "flex",
    flexDirection: "row",
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },

});
