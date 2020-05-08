import React, { Component } from "react";
import { StyleSheet,View,TextInput,Text, TouchableOpacity, ScrollView } from "react-native";

export default class Random extends Component {

    render() {

        return(
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headerText}>This is so random</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffe4e1",
    },
    header: {
      backgroundColor: "#e1ffef",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 10,
      borderBottomColor: "#ddd"
    },
    headerText: {
      color: "#b2908c",
      //fontFamily: "font1",
      fontSize: 40,
      padding: 50
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 100
    },
    footer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
    },
    textInput: {
      alignSelf: "stretch",
      color: "#fff",
      padding: 27,
      backgroundColor: "#7ab295", //#2F4F4F
      borderTopWidth: 2,
      fontSize: 20,
      borderTopColor: "#ededed"
    },
    button: {
      position: "absolute",
      zIndex: 11,
      right: 20,
      bottom: 10,
      backgroundColor: "#e1ffef",
      width: 100,
      height: 100,
      borderRadius: 59,
      alignItems: "center",
      justifyContent: "center",
      elevation: 8
    },
    buttonText: {
      color: "#b2908c",
      fontSize: 20
    }
  });