import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/help.styles";

export default class Help extends React.Component {
  render() {
    return (
<View>
<Text style={styles.help}>
          Star a translation to see it here.
        </Text>
</View>
);
}
}
