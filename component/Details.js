import React, { Component } from "react";
import { Text, View } from "react-native";

export default class Details extends Component {
  static navigationOptions = {
    title: "Details"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
