import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/googleUsageId.styles";

export default class GoogleUsageId extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.googleUsageIdTitle}>
        Google Usage ID
        </Text>
        <Text style={styles.googleUsageId>
        The Google Usage ID is a small piece of text that is sent along with information about your use of Google’s products. This information won’t be used to identify you and is not associated with your Google Account. It’s used to improve Google’s products and services for everyone.
        </Text>
        <Text style={styles.googleUsageId}>
        Your device sends information to Google about how Google products work for
        you. Google uses the information to improve our products. Our privacy policy explains how we protect your privacy in our use of this information.
        </Text>
        <Text style={styles.googleUsageIdReset}>
        RESET GOOGLE USAGE ID
        </Text>
      </View>
);
}
}
