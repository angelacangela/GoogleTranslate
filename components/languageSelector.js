import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from "expo";
import styles from "../styles/languageSelector.styles";
import languagesDictionary from "../constants/languagesDictionary";

const LanguageSelector = ({
  navigate,
  onPress,
  sourceLang=false,
  targetLang=false
}) => {
  let payloadValue;
  if (sourceLang) {
    payloadValue = "sourceLang"
  } else if (targetLang) {
    payloadValue = "targetLang"
  }
  return (
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
            <View>
              <View style={styles.languageSelection}>
                <TouchableOpacity onPress={() => {
                  onPress({ [payloadValue]: item });
                  navigate("Main", { name: "Main" });
                }}>
                  <Text styles={styles.languageSpecific}>
                    {item}
                  </Text>
                  <Icon.Ionicons
                    name={"md-swap"}
                    size={26}
                    color={"gray"}
                    style={styles.swapButton}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default LanguageSelector;
