import { Dimensions, StyleSheet } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
      alignItems: "center",
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
      justifyContent: "center"
    },
    savedEmptyContainer: {
      flex: 1,
      justifyContent: "center",
      marginTop: SCREEN_HEIGHT * 0.3
    },
    savedEmptyText: {
      color: "gray",
      fontSize: 20,
      fontWeight: "100",
      textAlign: "center"
    },
    savedStar: {
      textAlign: "center",
    },
});
