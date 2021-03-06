import React from 'react';
import { SafeAreaView, FlatList, Text, TouchableOpacity } from 'react-native';
import { Icon } from "expo";
import styles from "../../styles/languageSelector.styles";
import LanguageSelector from "../../components/languageSelector";

export default class TargetLanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render() {
    const { navigation, selectTargetLang } = this.props;
    const { navigate } = navigation;
    return (
      <SafeAreaView style={styles.container}>
        <LanguageSelector
          navigate={navigate}
          onPress={selectTargetLang}
          targetLang
        />
      </SafeAreaView>
    );
  }
}
