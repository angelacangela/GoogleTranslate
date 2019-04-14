import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import styles from "../styles/savedScreen.styles";

export default class SavedScreen extends React.Component {
  static navigationOptions = {
    title: 'Saved',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
      </ScrollView>
    );
  }
}
