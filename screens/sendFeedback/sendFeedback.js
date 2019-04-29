import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/sendFeedback.styles";

export default class SendFeedback extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={styles.sendFeedbackRequest}>
        Go to the Legal Help page to request content changes for legal reasons. Some account and system info will be sent to the Google. We’ll use the info you give us to address technical issues and improve our services, subject to our Privacy Policy and Terms of Service.
        </Text>
      </View>
);
}
}
