import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/termsOfService.styles";

export default class TermsOfService extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.termsOfService}>
        Star a translation to see it here.
        </Text>
      </View>
);
}
}
