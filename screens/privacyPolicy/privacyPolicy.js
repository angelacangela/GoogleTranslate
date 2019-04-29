import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/privacyPolicy.styles";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.privacyPolicy}>
        Star a translation to see it here.
        </Text>
      </View>
      );
}
}
