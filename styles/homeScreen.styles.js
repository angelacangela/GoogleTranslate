import { Dimensions, Platform, StyleSheet, ScrollView } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4285F4",
  },
  contentContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1
  },
  downloadOffline: {
    height: 210,
    width: 395,
    backgroundColor: "white",
    marginBottom: 9,
    marginLeft: 9,
    marginTop: 9,
    margin: "auto",
  },
  homeHeaderContainer: {
    backgroundColor: "#4285F4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  homeHeader: {
    color: "white",
    fontSize: 20,
    paddingVertical: 15,
    textAlign: "center"
  },
  instantTranslation: {
    fontSize: 16,
    color: "#7C7C7C",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 24,
  },
  inputButton: {
    flex: 1,
    justifyContent: "center",
    paddingVertical: 7,
  },
  inputButtonIcon: {
    textAlign: "center"
  },
  inputButtonText: {
    textAlign: "center",
    fontSize: 12,
    color: "#555656",
    paddingHorizontal: 10,
  },
  inputButtonsContainer: {
    display: "flex",
    flexDirection: "row"
  },
  language: {
    color: "#4285F4",
    flex: 1,
    fontSize: 17,
    textAlign: "center",
  },
  languageButton: {
    alignItems: "center",
    flex: 1,
  },
  languagesContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#727272",
    borderBottomWidth: StyleSheet.hairlineWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  bold: {
    fontWeight: "500"
  },
  swapButton: {
    alignContent: "center"
  },
  textInput: {
    display: "flex",
    fontSize: 17,
    color: "#727272",
    marginVertical: 10,
    maxHeight: SCREEN_HEIGHT * 0.12,
    minHeight: SCREEN_HEIGHT * 0.12,
    paddingHorizontal: 30,
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderBottomColor: "#727272",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
