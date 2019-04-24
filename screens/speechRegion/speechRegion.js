import React from 'react';
import { View,Text,TouchableOpacity, ScrollView } from "react-native";
import { Icon } from "expo";
import styles from "../../styles/speechRegion.styles";

export default class SpeechRegion extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.speechRegion}>
          Arabic
          </Text>
          <Text style={styles.speechRegionSub}>
          Arabic
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Bengali
          </Text>
          <Text style={styles.speechRegionSub}>
          Bengali
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Chinese (Simplified)
          </Text>
          <Text style={styles.speechRegionSub}>
          Mandarin (China)
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Chinese (Traditional)
          </Text>
          <Text style={styles.speechRegionSub}>
          Mandarin (Taiwan)
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          English
          </Text>
          <Text style={styles.speechRegionSub}>
          English
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          French
          </Text>
          <Text style={styles.speechRegionSub}>
          French
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Portuguese
          </Text>
          <Text style={styles.speechRegionSub}>
          Portuguese
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Spanish
          </Text>
          <Text style={styles.speechRegionSub}>
          Spanish
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Swahili
          </Text>
          <Text style={styles.speechRegionSub}>
          Swahili
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Tamil
          </Text>
          <Text style={styles.speechRegionSub}>
          Tamil
          </Text>
        </View>
        <View>
          <Text style={styles.speechRegion}>
          Urdu
          </Text>
          <Text style={styles.speechRegionSub}>
          Urdu
          </Text>
        </View>
      </View>
);
}
}
