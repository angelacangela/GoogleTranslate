import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/reviewOnTheAppStore.styles";

export default class ReviewOnTheAppStore extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.reviewOnTheAppStore}>
        Star a translation to see it here.
        </Text>
      </View>
      );
}
}
