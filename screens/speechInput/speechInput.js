import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/speechInput.styles";

export default class SpeechInput extends React.Component {
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
