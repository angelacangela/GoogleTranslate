import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/sendCrashReports.styles";

export default class SendCrashReports extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.sendCrashReports}>
        Star a translation to see it here.
        </Text>
      </View>
      );
}
}
