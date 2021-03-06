import React from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "expo";
import styles from "../../styles/languageSelector.styles";
import LanguageSelector from "../../components/languageSelector";

export default class SourceLanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render() {
    const { navigation, selectSourceLang } = this.props;
    const { navigate } = navigation;
    return (
      <SafeAreaView style={styles.container}>
        <LanguageSelector
          navigate={navigate}
          onPress={selectSourceLang}
          sourceLang
        />
      </SafeAreaView>
    );
  }
}
