import React from 'react';
import { Icon } from "expo";
import {
  Image,
  Keyboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import styles from "../../styles/homeScreen.styles";
import languagesDictionary from "../../constants/languagesDictionary";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      inputValue: ""
    }
  }

  render() {
    const { getTranslation, navigation, sourceLang, targetLang } = this.props;
    const { navigate } = navigation;
    const { inputValue } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.homeHeaderContainer}>
          <Text style={[styles.bold, styles.homeHeader]}>
            Google
          </Text>
          <Text style={styles.homeHeader}> Translate</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.languagesContainer}>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => {
                navigate("LanguageSelector", { name: "LanguageSelector" })
              }}
            >
              <Text style={styles.language}>{sourceLang}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Ionicons
                name={"md-swap"}
                size={26}
                color={"#555656"}
                style={styles.swapButton}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.languageButton}
              onPress={() => {
                navigate("LanguageSelector", { name: "LanguageSelector" })
              }}
            >
              <Text style={styles.language}>{targetLang}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChangeText={(inputValue) => this.setState({ inputValue })}
              onSubmitEditing={() => {
                getTranslation({
                  sourceLang: languagesDictionary[sourceLang],
                  targetLang: languagesDictionary[targetLang],
                  sourceText: inputValue
                });
              }}
              multiline={true}
              placeholder={"Enter text"}
              style={styles.textInput}
              value={inputValue}
            />
            <View style={styles.inputButtonsContainer}>
              <TouchableOpacity style={styles.inputButton}>
              <Icon.Ionicons
                name={"md-camera"}
                size={26}
                color={"#48499e"}
                style={styles.inputButtonIcon}
              />
                <Text style={styles.inputButtonText}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputButton}>
              <Icon.Ionicons
                name={"md-create"}
                size={26}
                color={"#48499e"}
                style={styles.inputButtonIcon}
              />
                <Text style={styles.inputButtonText}>Handwriting</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputButton}>
              <Icon.Ionicons
                name={"ios-chatbubbles"}
                size={26}
                color={"#48499e"}
                style={styles.inputButtonIcon}
              />
                <Text style={styles.inputButtonText}>Conversation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.inputButton}>
              <Icon.Ionicons
                name={"md-mic"}
                size={26}
                color={"#48499e"}
                style={styles.inputButtonIcon}
              />
                <Text style={styles.inputButtonText}>Voice</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
