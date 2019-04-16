import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "expo";
import styles from "../../styles/languageSelector.styles";
import languagesDictionary from "../../constants/languagesDictionary";

export default class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }

  render() {
    const { navigation, selectSourceLang, selectTargetLang } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.allLanguages}>All languages</Text>
          <FlatList
            data={Object.keys(languagesDictionary)}
            keyExtractor={(language) => language.toString()}
            ItemSeparatorComponent={() => (
              <View style={styles.separator}/>
            )}
            renderItem={(language) => {
              const { item } = language;
              return (
                <TouchableOpacity onPress={() => {
                  selectTargetLang({ targetLang: item }).then(() => {
                    navigate("Main", { name: "Main" })
                  })
                }}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    );
  }
}
