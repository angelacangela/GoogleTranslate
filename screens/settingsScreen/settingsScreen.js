import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/settingsScreen.styles";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.bigSettingsContainer}>
          <Text style={styles.settingsTitle}>
          Support
          </Text>
          <View style={styles.settingsWholeInside}>
            <View style={styles.settingsBars}>
              <View style={styles.settingsLongbox}>
                <TouchableOpacity style={styles.settingsBox}>
                  <Text style={styles.settingsBoxText}>
                  Feedback
                  </Text>
                  <Icon.Ionicons
                    name={"ios-arrow-forward"}
                    size={25}
                    color={"gray"}
                    style={styles.settingDetails}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsBox}>
                  <Text style={styles.settingsBoxText}>
                  Help
                  </Text>
                  <Icon.Ionicons
                    name={"ios-arrow-forward"}
                    size={25}
                    color={"gray"}
                    style={styles.settingDetails}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingsBox}>
                  <Text style={styles.settingsBoxText}>
                  About
                  </Text>
                  <Icon.Ionicons
                    name={"ios-arrow-forward"}
                    size={25}
                    color={"gray"}
                    style={styles.settingDetails}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={styles.settingsTitle}>
          Voice
          </Text>
          <View style={styles.settingsWhole}>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Speech input
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Speech region
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Camera input
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Offline translation
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Default apps
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Siri Shortcuts
                </Text>
                <Icon.Ionicons
                  name={"ios-arrow-forward"}
                  size={25}
                  color={"gray"}
                  style={styles.settingDetails}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.settingsLongbox}>
              <TouchableOpacity style={styles.settingsBox}>
                <Text style={styles.settingsBoxText}>
                Send crash reports
                </Text>
              <Icon.Ionicons
                name={"ios-arrow-forward"}
                size={25}
                color={"gray"}
                style={styles.settingDetails}
              />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.clearHistoryButton}>
              <Text style={styles.clearHistoryButtonText}>
              CLEAR TRANSLATION HISTORY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
