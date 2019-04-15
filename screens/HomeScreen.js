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
import styles from "../styles/homeScreen.styles";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props){
    super(props);
    this.state = {
      inputValue: 'Enter text'
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }

  render() {
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
            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.language}>Korean</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon.Ionicons
                name={"md-swap"}
                size={26}
                color={"#555656"}
                style={styles.swapButton}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.languageButton}>
              <Text style={styles.language}>English</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              onChange={(e) => this.updateInputValue(e)}
              multiline={true}
              style={styles.textInput}
              value={this.state.inputValue}
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
