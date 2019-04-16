import React from 'react';
import { FlatList, View, ScrollView, StyleSheet, Text } from 'react-native';
import { Icon } from "expo";
import styles from "../styles/savedScreen.styles";

export default class SavedScreen extends React.Component {
  static navigationOptions = {
    title: 'Saved',
  };

  constructor(props) {
    super(props);
      this._renderEmptyListComponent = this._renderEmptyListComponent.bind(this)
  }

  _renderEmptyListComponent() {
    return (
      <View style={styles.savedEmptyContainer}>
        <Icon.Ionicons
          name={"md-star"}
          size={90}
          color={"lightgray"}
          style={styles.savedStar}
        />
        <Text style={styles.savedEmptyText}>
          Star a translation to see it here.
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[]}
          ListEmptyComponent={this._renderEmptyListComponent}
          renderData={() => <View></View>}
        />
      </View>
    );
  }
}
