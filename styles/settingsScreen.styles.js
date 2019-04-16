import { StyleSheet } from "react-native";

export default StyleSheet.create({
  settingsBox: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 13,
    paddingRight: 30,
    marginHorizontal: 13,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#e6e6e6"
  },
  settingsBoxText: {
    fontSize: 20,
    color: "black",
    flex: 1,
  },

  bigSettingsContainer: {
    backgroundColor: "#f2f2f2",
  },
  clearHistoryButton: {
    backgroundColor: "#d34428",
    marginHorizontal: 13,
    padding: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  clearHistoryButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  settingDetails: {
    justifyContent: "center"
  },
  settingsLongbox: {
    marginBottom: 19,
  },
  settingsTitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 12,
    marginTop: 34,
    marginLeft: 20,

  },

});
