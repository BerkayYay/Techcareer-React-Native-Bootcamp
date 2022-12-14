import React, { Component } from "react";
import { View, TouchableOpacity, Image, Text, Button } from "react-native";
import { StyleSheet } from "react-native";

class TitleLogo extends Component {
  render() {
    return (
      <Image
        style={{ width: 38, height: 38 }}
        source={require("../assets/header-icon.png")}
      />
    );
  }
}

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <TitleLogo />,
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.navigate("AboutModal")}
        >
          <Text style={{ color: "#333" }}>About</Text>
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home</Text>

        <Button
          title="Contact Screen"
          onPress={() =>
            navigate("Contact", {
              title: "Contact",
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
