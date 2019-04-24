import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/defaultApps.styles";

export default class DefaultApps extends React.Component {
  render() {
    return (
<View>
<Text style={styles.savedEmptyText}>
          Star a translation to see it here.
        </Text>
</View>
);
}
}
