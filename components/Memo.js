import React, { Component } from "react";
import {StyleSheet,View,Text,TouchableOpacity} from "react-native";

export default class Memo extends Component {
  render() {
    return (
      <View style={styles.memo}>
        <Text style={styles.memoDate}>{this.props.val.date}</Text>
        <Text style={styles.memoText}>{this.props.val.memo}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.memoDelete}
        >
          <Text style={styles.memoTextDelete}>
              Delete
              </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memo: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed"
  },
  memoText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "#7ab295"
  },
  memoDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7f504a",
    borderRadius: 15,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  memoTextDelete: {
    color: "white"
  }
});
